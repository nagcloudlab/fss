package com.example.service;

import com.example.domain.Transaction;
import com.example.domain.TransactionKey;
import com.example.repository.TransactionRepository;
import lombok.RequiredArgsConstructor;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.time.ZoneId;
import java.util.Date;


//@Service
@RequiredArgsConstructor
public class RetryTransactionConsumerService /*implements AcknowledgingMessageListener<TransactionKey,Transaction>*/ {

    private final TransactionRepository transactionRepository;


    @KafkaListener(
            groupId = "transaction-consumer-group-retry",
            topics = "transactions.RETRY",
            containerFactory = "kafkaListenerContainerFactory"
    )
    @Transactional
    public void onNewTransaction(ConsumerRecord<TransactionKey, Transaction> consumerRecord) {
        System.out.println("Received new transaction: " + consumerRecord.value());
        consumerRecord.headers().forEach(header -> {
            System.out.println(header.key() + " : " + new String(header.value()));
        });
       // validate(consumerRecord.value());

        // Message/Event to Entity
        com.example.entity.Transaction transactionEntity = new com.example.entity.Transaction();
        transactionEntity.setId(consumerRecord.value().getId());
        transactionEntity.setAmount(consumerRecord.value().getAmount());
        transactionEntity.setType(consumerRecord.value().getType());
        transactionEntity.setFromAccount(consumerRecord.value().getFromAccount());
        transactionEntity.setToAccount(consumerRecord.value().getToAccount());
        Instant instant = consumerRecord.value().getTimestamp().atZone(ZoneId.systemDefault()).toInstant();
        Date date = Date.from(instant);
        transactionEntity.setTimestamp(date);

//        transactionRepository.save(transactionEntity);  // .....

    }

    private void validate(Transaction transaction) {
//        if(true){
//            throw new IllegalStateException("something bad happened"); // Transient failure
//        }
        if(transaction.getAmount() == null){
            throw new IllegalArgumentException("From Account"); // Bad record
        }
    }


//    @Override
//    @KafkaListener(
//            groupId = "transaction-consumer-group",
//            topics = "transactions",
//            containerFactory = "kafkaListenerContainerFactory"
//    )
//    public void onMessage(ConsumerRecord<TransactionKey, Transaction> consumerRecord, Acknowledgment acknowledgment) {
//        System.out.println("Received new transaction: " + consumerRecord.value());
//        acknowledgment.acknowledge(); // manual ack ( commit offset )
//    }


}
