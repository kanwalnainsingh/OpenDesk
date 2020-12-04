# OpenDesk Organisation Service:
- Organisation can set up sites or buildings with details of desk capacity with available and reserved desk.
- Update or delete existing infrastructure setup.

# Setting up development environment
- Import maven project in Intellij or Eclipse.
- Install [lombok](https://www.baeldung.com/lombok-ide)  on IDE.
- Install Redis on the machine for local db integration.
- Install Apache Kafka on the machine for local kafka integration.

# Database
- Redis is used as a database.
- To run db locally : Download from : https://github.com/dmajkic/redis/downloads & Execute redis-server.exe

# Usage
- Open cmd or bash, navigate to organisation-service and run : mvn clean install
- After build is successful, run "java -jar target/jar-name.jar" or run SpringBoot main class from IDE.
- Open browser and go to URL "http://localhost:8084/api/organisation-service/swagger-ui.html/" and explore service.

# Kafka for development environment
- Download Apache kafka locally [https://kafka.apache.org/downloads]
- update dataDir in zookeeper.properties
- update log.dirs in server.properties
- start zookeeper server
- start kafka server
- create the topic mentioned in application-local.yaml
- refer [https://kafka.apache.org/quickstart] for the commands
