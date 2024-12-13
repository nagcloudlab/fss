## kafka-cluster ( zookeeper-based )

### Start zookeeper

```bash
./bin/zookeeper-server-start.sh config/zookeeper.properties
```

### Start zookeeper shell

```bash
./bin/zookeeper-shell.sh localhost:2181
```

### Start kafka server ( broker ) - 101

```bash
./bin/kafka-server-start.sh config/server.properties
```

### Start kafka server ( broker ) - 102

```bash
./bin/kafka-server-start.sh config/server.properties
```

### Start kafka server ( broker ) - 103

```bash
./bin/kafka-server-start.sh config/server.properties
```

---

## create topic

```bash
./bin/kafka-topics.sh --bootstrap-server localhost:9092 --create --topic topic1 --partitions 1
```

## list topics

```bash
./bin/kafka-topics.sh --bootstrap-server localhost:9092 --list
```

## describe topic

```bash
./bin/kafka-topics.sh --bootstrap-server localhost:9092 --describe --topic topic1
```
