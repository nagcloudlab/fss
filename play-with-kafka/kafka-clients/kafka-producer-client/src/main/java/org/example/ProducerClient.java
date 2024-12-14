package org.example;

import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.clients.producer.RecordMetadata;
import org.slf4j.Logger;

import java.util.List;
import java.util.Properties;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;

public class ProducerClient {

    private static Logger logger = org.slf4j.LoggerFactory.getLogger("producer-client");

    public static void main(String[] args) throws Exception {

        Properties properties = new Properties();
        


        properties.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
        properties.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG,
                "org.apache.kafka.common.serialization.StringSerializer");
        properties.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG,
                "org.apache.kafka.common.serialization.StringSerializer");
        //properties.put(ProducerConfig.PARTITIONER_CLASS_CONFIG, CustomPartitioner.class.getName());


        //-------------------------------------------
        // safe ( durability ) producer
        //-------------------------------------------

        // - create topic with replication factor > 1
        // - acks=all
        // - producer config: retries, retry.backoff.ms, delivery.timeout.ms
        // - min.insync.replicas=2 ( topic / broker level)
        // - unclean.leader.election.enable=false ( broker level)
        // - enable.idempotency=true

        properties.put(ProducerConfig.ACKS_CONFIG, "-1"); // 0, 1,-1/all
        properties.put(ProducerConfig.RETRIES_CONFIG, "2147483647");
        properties.put(ProducerConfig.RETRY_BACKOFF_MS_CONFIG, "1000");
        properties.put(ProducerConfig.DELIVERY_TIMEOUT_MS_CONFIG, "120000");
        properties.put(ProducerConfig.ENABLE_IDEMPOTENCE_CONFIG, "true");

        //-------------------------------------------
        // high throughput producer
        //-------------------------------------------

        properties.put(ProducerConfig.BATCH_SIZE_CONFIG, "16384");
        properties.put(ProducerConfig.LINGER_MS_CONFIG, "0");
        properties.put(ProducerConfig.COMPRESSION_TYPE_CONFIG, "none"); // producer | topic | broker
        properties.put(ProducerConfig.MAX_IN_FLIGHT_REQUESTS_PER_CONNECTION, "1");
        properties.put(ProducerConfig.BUFFER_MEMORY_CONFIG, "33554432");
        properties.put(ProducerConfig.MAX_BLOCK_MS_CONFIG, "60000");

        //-------------------------------------------
        // other configuration
        //-------------------------------------------

        //
        properties.put(ProducerConfig.CLIENT_ID_CONFIG, "producer-1");
        //properties.put(ProducerConfig.INTERCEPTOR_CLASSES_CONFIG, "com.example.ProducerInterceptor");

        //-------------------------------------------
        // Security
        //-------------------------------------------

        // PLAINTEXT
        // SSL
        // SASL_PLAINTEXT
        // SASL_SSL

        //-------------------------------------------




        KafkaProducer<String,String> producer = new KafkaProducer<>(properties);
        // KafkaTemplate

        String topic="topic1";

        for (int i = 0; i <10; i++) {
            String value = "Apache Kafka is a distributed event store and stream-processing platform. It is an open-source system developed by the Apache Software Foundation written in Java and Scala. The project aims to provide a unified, high-throughput, low-latency platform for handling real-time data feed\n"
                    +
                    "Apache Kafka is a distributed event store and stream-processing platform. It is an open-source system developed by the Apache Software Foundation written in Java and Scala. The project aims to provide a unified, high-throughput, low-latency platform for handling real-time data feed\n"
                    +
                    "Apache Kafka is a distributed event store and stream-processing platform. It is an open-source system developed by the Apache Software Foundation written in Java and Scala. The project aims to provide a unified, high-throughput, low-latency platform for handling real-time data feed\n"
                    +
                    "Apache Kafka is a distributed event store and stream-processing platform. It is an open-source system developed by the Apache Software Foundation write";
            ProducerRecord<String, String> record = new ProducerRecord<>(topic,value);
            Future<RecordMetadata> recordMetadataFuture=producer.send(record); // write  request
            //..
            RecordMetadata recordMetadata=recordMetadataFuture.get();
            // log the metadata with topic, partition, offset , key
            logger.info("topic: "+recordMetadata.topic()+" partition: "+recordMetadata.partition()+" offset: "+recordMetadata.offset());
//            TimeUnit.SECONDS.sleep(1);
        }

    }
}