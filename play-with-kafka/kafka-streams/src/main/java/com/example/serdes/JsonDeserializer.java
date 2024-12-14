package com.example.serdes;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

import java.io.IOException;

public class JsonDeserializer<T> implements org.apache.kafka.common.serialization.Deserializer<T> {


    private final ObjectMapper objectMapper = new ObjectMapper()
            .registerModule(new JavaTimeModule())
            .configure(com.fasterxml.jackson.databind.SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false);

    private Class<T> clazz;
    public JsonDeserializer(Class<T> clazz) {
        this.clazz = clazz;
    }

    @Override
    public T deserialize(String topic, byte[] data) {
        if(data==null)
            return null;
        try {
            return objectMapper.readValue(data, clazz);
        }
        catch (IOException e) {
            throw new RuntimeException(e);
        }
        catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
