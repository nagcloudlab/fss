package com.example.topology;

import com.example.domain.Transaction;
import com.example.domain.TransactionKey;
import com.example.domain.TransactionType;
import com.example.serdes.JsonSerdes;
import org.apache.kafka.streams.StreamsBuilder;
import org.apache.kafka.streams.Topology;
import org.apache.kafka.streams.kstream.*;

public class TransactionsTopology {

    public static Topology build() {

        StreamsBuilder builder = new StreamsBuilder();
        var sourceProcessor = builder.stream("transactions", Consumed.with(JsonSerdes.transactionKeySerdes(), JsonSerdes.transactionSerdes()));

        sourceProcessor
                .filter((key, value) -> value.getAmount().longValue()>200)
                .to("large-transactions", Produced.with(JsonSerdes.transactionKeySerdes(), JsonSerdes.transactionSerdes()));

        Predicate<TransactionKey, Transaction> isInterest = (key, value) -> value.getType().equals(TransactionType.INTEREST);
        Predicate<TransactionKey, Transaction> isDeposit = (key, value) -> value.getType().equals(TransactionType.DEPOSIT);
        sourceProcessor
                .split(Named.as("all-transactions"))
                .branch(isInterest, Branched.withConsumer(interestTransactionStream->{
                        interestTransactionStream
                                .to("interest-transactions", Produced.with(JsonSerdes.transactionKeySerdes(), JsonSerdes.transactionSerdes()));
                }))
                .branch(isDeposit, Branched.withConsumer(depositTransactionStream->{
                    depositTransactionStream
                            .to("deposit-transactions", Produced.with(JsonSerdes.transactionKeySerdes(), JsonSerdes.transactionSerdes()));
                }));

        return builder.build();
    }
}
