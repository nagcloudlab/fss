package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/confluentinc/confluent-kafka-go/kafka"
	"github.com/go-redis/redis/v8"
)

// UserActivity represents the structure of a user activity message
type UserActivity struct {
	UserID       string `json:"user_id"`
	ActivityType string `json:"activity_type"`
	Timestamp    string `json:"timestamp"`
}

// Create a Kafka consumer
func createKafkaConsumer() (*kafka.Consumer, error) {
	config := &kafka.ConfigMap{
		"bootstrap.servers": "localhost:9092",
		"group.id":          "activity_group",
		"auto.offset.reset": "earliest",
	}

	consumer, err := kafka.NewConsumer(config)
	if err != nil {
		return nil, err
	}
	return consumer, nil
}

// Create a Redis client
func createRedisClient() *redis.Client {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379",
		Password: "", // no password set
		DB:       0,  // use default DB
	})
	return rdb
}

func main() {
	consumer, err := createKafkaConsumer()
	if err != nil {
		log.Fatalf("Failed to create Kafka consumer: %s\n", err)
	}
	defer consumer.Close()

	rdb := createRedisClient()
	ctx := context.Background()

	topic := "user-activity"
	err = consumer.Subscribe(topic, nil)
	if err != nil {
		log.Fatalf("Failed to subscribe to topic: %s\n", err)
	}

	// Set up a signal handler to gracefully shut down the consumer
	sigchan := make(chan os.Signal, 1)
	signal.Notify(sigchan, syscall.SIGINT, syscall.SIGTERM)

	run := true

	for run {
		select {
		case sig := <-sigchan:
			fmt.Printf("Caught signal %v: terminating\n", sig)
			run = false
		default:
			ev := consumer.Poll(100)
			switch e := ev.(type) {
			case *kafka.Message:
				var userActivity UserActivity
				err := json.Unmarshal(e.Value, &userActivity)
				if err != nil {
					log.Printf("Failed to unmarshal message: %s\n", err)
					continue
				}

				// Store the user activity in Redis
				redisKey := fmt.Sprintf("user:%s:activity:%s", userActivity.UserID, userActivity.ActivityType)
				err = rdb.Incr(ctx, redisKey).Err()
				if err != nil {
					log.Printf("Failed to increment Redis key: %s\n", err)
				}
				// Set expiration time of 1 hour for the key
				rdb.Expire(ctx, redisKey, time.Hour)

				fmt.Printf("Processed and stored activity for user %s: %s at %s\n",
					userActivity.UserID, userActivity.ActivityType, userActivity.Timestamp)
			case kafka.Error:
				// Errors should generally be considered fatal to the consumer
				fmt.Fprintf(os.Stderr, "%% Error: %v\n", e)
				run = false
			default:
				// Ignore other event types
			}
		}
	}
}
