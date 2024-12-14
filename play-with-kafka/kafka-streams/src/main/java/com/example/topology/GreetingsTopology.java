package com.example.topology;

import org.apache.kafka.common.serialization.Serdes;
import org.apache.kafka.streams.KeyValue;
import org.apache.kafka.streams.StreamsBuilder;
import org.apache.kafka.streams.Topology;
import org.apache.kafka.streams.kstream.Consumed;
import org.apache.kafka.streams.kstream.KStream;
import org.apache.kafka.streams.kstream.Printed;
import org.apache.kafka.streams.kstream.Produced;

import java.util.List;

public class GreetingsTopology {

    public static Topology build() {

        StreamsBuilder builder = new StreamsBuilder();
       var sourceProcessor1=builder.stream("greetings", Consumed.with(Serdes.String(), Serdes.String()));

       //sourceProcessor1.print(Printed.<String,String>toSysOut().withLabel("sourceProcessor1"));

//       var streamProcessor1=
//                 sourceProcessor1
//                         .filter((key,value)->value.length()>5)
//                         .filterNot((key,value)->value.contains("a"))
//                         .map((key,value)->new KeyValue<>(key,value.toUpperCase()))
                         //.mapValues(value->value.toUpperCase());
//                         .flatMap((key,value)->{
//                             var result= new KeyValue<String,String>(key,value);
//                             return List.of(result);
//                         })
//                         .flatMapValues(value->List.of(value.split(" ")));

        var sourceProcessor2=builder.stream("tamil-greetings", Consumed.with(Serdes.String(), Serdes.String()));

        //sourceProcessor2.print(Printed.<String,String>toSysOut().withLabel("sourceProcessor2"));

        var streamProcessor1=sourceProcessor1.merge(sourceProcessor2);

        //streamProcessor1.print(Printed.<String,String>toSysOut().withLabel("streamProcessor1"));

       streamProcessor1.to("enriched-greetings", Produced.with(Serdes.String(),Serdes.String()));
       return builder.build();

    }

}
