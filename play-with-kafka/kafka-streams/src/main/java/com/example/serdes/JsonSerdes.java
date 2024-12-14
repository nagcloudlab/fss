package com.example.serdes;

import com.example.domain.Transaction;
import com.example.domain.TransactionKey;
import org.apache.kafka.common.serialization.Serde;
import org.apache.kafka.common.serialization.Serdes;

public class JsonSerdes {


    public static Serde<TransactionKey> transactionKeySerdes() {
        JsonSerializer<TransactionKey> jsonSerializer = new JsonSerializer<>();
        JsonDeserializer<TransactionKey> jsonDeserializer = new JsonDeserializer<>(TransactionKey.class);
        return Serdes.serdeFrom(jsonSerializer, jsonDeserializer);
    }

    public static Serde<Transaction> transactionSerdes() {
        JsonSerializer<Transaction> jsonSerializer = new JsonSerializer<>();
        JsonDeserializer<Transaction> jsonDeserializer = new JsonDeserializer<>(Transaction.class);
        return Serdes.serdeFrom(jsonSerializer, jsonDeserializer);
    }
}
