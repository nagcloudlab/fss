package main

import (
	"encoding/json"
	"fmt"
	"math/rand"
	"time"

	"github.com/confluentinc/confluent-kafka-go/kafka"
)

// UserActivity represents the structure of a user activity message
type UserActivity struct {
	UserID      string `json:"user_id"`
	ActivityType string `json:"activity_type"`
	Timestamp    string `json:"timestamp"`
}

// Create a Kafka producer
func createKafkaProducer() (*kafka.Producer, error) {
	producer, err := kafka.NewProducer(&kafka.ConfigMap{
		"bootstrap.servers": "localhost:9092",
	})
	if err != nil {
		return nil, err
	}
	return producer, nil
}

// Generate a random user activity in JSON format
func generateRandomUserActivity() (string, error) {
	rand.Seed(time.Now().UnixNano())
	activityTypes := []string{"login", "logout", "transfer"}
	userID := fmt.Sprintf("%d", rand.Intn(10))
	activityType := activityTypes[rand.Intn(len(activityTypes))]
	timestamp := fmt.Sprintf("%d", time.Now().Unix())

	userActivity := UserActivity{
		UserID:      userID,
		ActivityType: activityType,
		Timestamp:    timestamp,
	}

	jsonData, err := json.Marshal(userActivity)
	if err != nil {
		return "", err
	}

	return string(jsonData), nil
}

func main() {
	producer, err := createKafkaProducer()
	if err != nil {
		fmt.Printf("Failed to create Kafka producer: %s\n", err)
		return
	}
	defer producer.Close()

	topic := "user-activity"

	for i := 0; i < 10; i++ {
		activityJSON, err := generateRandomUserActivity()
		if err != nil {
			fmt.Printf("Failed to generate user activity: %s\n", err)
			continue
		}

		// Produce the message to Kafka
		err = producer.Produce(&kafka.Message{
			TopicPartition: kafka.TopicPartition{Topic: &topic, Partition: kafka.PartitionAny},
			Value:          []byte(activityJSON),
		}, nil)

		if err != nil {
			fmt.Printf("Failed to produce message: %s\n", err)
		} else {
			fmt.Printf("Produced message: %s\n", activityJSON)
		}

		// Wait for message deliveries before shutting down
		producer.Flush(1 * 1000)

		// Sleep for a random interval to simulate user activity
		// time.Sleep(time.Duration(100) * time.Millisecond)
	}
}
