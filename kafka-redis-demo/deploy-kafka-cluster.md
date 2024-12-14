## Zookeeper based

./bin/zookeeper-server-start.sh config/zookeeper.properties

./bin/kafka-server-start.sh config/server-101.properties

./bin/kafka-server-start.sh config/server-102.properties

./bin/kafka-server-start.sh config/server-103.properties

## KRaft based

bin/kafka-storage.sh format --config config/kraft/server-101.properties --cluster-id reLhSuUYT7mJU5JUvLaWCQ

bin/kafka-storage.sh format --config config/kraft/server-102.properties --cluster-id reLhSuUYT7mJU5JUvLaWCQ

bin/kafka-storage.sh format --config config/kraft/server-103.properties --cluster-id reLhSuUYT7mJU5JUvLaWCQ

bin/kafka-server-start.sh config/kraft/server-101.properties
bin/kafka-server-start.sh config/kraft/server-102.properties
bin/kafka-server-start.sh config/kraft/server-103.properties

## Kafka UI

cd path/to/kafka-ui
java -Dspring.config.additional-location=application.yml --add-opens java.rmi/javax.rmi.ssl=ALL-UNNAMED -jar kafka-ui-api-v0.7.2.jar

---
