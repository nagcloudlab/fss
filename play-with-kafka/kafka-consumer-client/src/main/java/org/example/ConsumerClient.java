package org.example;

import org.apache.kafka.clients.consumer.*;
import org.apache.kafka.common.errors.WakeupException;
import org.slf4j.Logger;

import java.time.Duration;
import java.time.temporal.TemporalUnit;
import java.util.List;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class ConsumerClient {

    private static Logger logger = org.slf4j.LoggerFactory.getLogger("consumer-client");

    public static void main(String[] args) {

        Properties properties = new Properties();
        properties.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092,localhost:9093,localhost:9094");
        properties.put(ConsumerConfig.GROUP_ID_CONFIG, "g4");
        properties.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, "org.apache.kafka.common.serialization.StringDeserializer");
        properties.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, "org.apache.kafka.common.serialization.StringDeserializer");
        properties.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, "latest"); // latest | none

        // partition assignment configuration
        properties.put(ConsumerConfig.PARTITION_ASSIGNMENT_STRATEGY_CONFIG, CooperativeStickyAssignor.class.getName());
        properties.put(ConsumerConfig.GROUP_INSTANCE_ID_CONFIG, "g4_1");
        properties.put(ConsumerConfig.SESSION_TIMEOUT_MS_CONFIG, "45000");
        properties.put(ConsumerConfig.HEARTBEAT_INTERVAL_MS_CONFIG, "3000");

        KafkaConsumer<String,String> consumer = new KafkaConsumer<>(properties);
        consumer.subscribe(List.of("sat-topic")); // p0

        Runtime.getRuntime().addShutdownHook(new Thread(()->{
            logger.info("stopping consumer");
            consumer.wakeup();
        }));

       try {
           while (true) {
               System.out.println("polling");
               ConsumerRecords<String, String> records = consumer.poll(Duration.ofSeconds(1));
               System.out.println("records.count() = " + records.count());
               for (ConsumerRecord<String, String> record : records) {
                  // log topic, partition, offset, key,
                   logger.info("topic={}, partition={}, offset={}, key={}",
                           record.topic(), record.partition(), record.offset(), record.key());
                   TimeUnit.SECONDS.sleep(2);
               }

           }
       } catch (WakeupException e) {
        //..
       } catch (InterruptedException e) {
           throw new RuntimeException(e);
       } finally {
           logger.info("shutting down");
           consumer.close();
       }

    }
}