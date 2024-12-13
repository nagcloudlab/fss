package org.example;

import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.clients.producer.RecordMetadata;
import org.slf4j.Logger;

import java.util.List;
import java.util.Properties;
import java.util.concurrent.Future;

public class ProducerClient {

    private static Logger logger = org.slf4j.LoggerFactory.getLogger("producer-client");

    public static void main(String[] args) throws Exception {

        Properties properties = new Properties();
        properties.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092,localhost:9093,localhost:9094");
        properties.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, "org.apache.kafka.common.serialization.StringSerializer");
        properties.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, "org.apache.kafka.common.serialization.StringSerializer");
        properties.put(ProducerConfig.PARTITIONER_CLASS_CONFIG, "org.example.CustomPartitioner");
        KafkaProducer<String,String> producer = new KafkaProducer<>(properties);

        String topic="topic1";

        for (int i = 0; i <Integer.MAX_VALUE; i++) {
            List<String> keys=List.of("foo","bar");
            String key=keys.get(i%2);
            String value = "Apache Kafka is a distributed event store and stream-processing platform. It is an open-source system developed by the Apache Software Foundation written in Java and Scala. The project aims to provide a unified, high-throughput, low-latency platform for handling real-time data feed\n"
                    +
                    "Apache Kafka is a distributed event store and stream-processing platform. It is an open-source system developed by the Apache Software Foundation written in Java and Scala. The project aims to provide a unified, high-throughput, low-latency platform for handling real-time data feed\n"
                    +
                    "Apache Kafka is a distributed event store and stream-processing platform. It is an open-source system developed by the Apache Software Foundation written in Java and Scala. The project aims to provide a unified, high-throughput, low-latency platform for handling real-time data feed\n"
                    +
                    "Apache Kafka is a distributed event store and stream-processing platform. It is an open-source system developed by the Apache Software Foundation write";
            ProducerRecord<String, String> record = new ProducerRecord<>(topic, key, value);
            Future<RecordMetadata> recordMetadataFuture=producer.send(record);
            //..
            RecordMetadata recordMetadata=recordMetadataFuture.get();
            // log the metadata with topic, partition, offset , key
            logger.info("topic: "+recordMetadata.topic()+" partition: "+recordMetadata.partition()+" offset: "+recordMetadata.offset()+" key: "+key);
        }

    }
}