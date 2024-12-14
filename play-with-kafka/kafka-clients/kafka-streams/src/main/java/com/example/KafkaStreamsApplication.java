package com.example;

import com.example.topology.GreetingsTopology;
import com.example.topology.TransactionsTopology;
import org.apache.kafka.streams.KafkaStreams;
import org.apache.kafka.streams.Topology;

import java.util.Properties;

public class KafkaStreamsApplication {
    public static void main(String[] args) {

        Properties properties=new Properties();
        properties.put("bootstrap.servers","localhost:9092");
        properties.put("application.id","transactions-streams-app");
        properties.put("num.stream.threads", Runtime.getRuntime().availableProcessors());

        //Topology topology= GreetingsTopology.build();
        Topology topology= TransactionsTopology.build();

        //System.out.println(topology.describe());

        KafkaStreams streams=new KafkaStreams(topology,properties);
        Runtime.getRuntime().addShutdownHook(new Thread(streams::close));
        try {
            streams.start();
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}