##### Stage 1 - Lets build the "deployable package"

FROM maven:3.6.3-jdk-11 as microservice-build
WORKDIR /open-desk/backend/employee-service

### Step 1 - Copy pom.xml and download project dependencies

# Dividing copy into two steps to ensure that we download dependencies
# only when pom.xml changes
COPY pom.xml .
# dependency:go-offline - Goal that resolves all project dependencies,
# including plugins and reports and their dependencies. -B -> Batch mode
RUN mvn dependency:go-offline -B

### Step 2 - Copy source and build "deployable package"
COPY src src
RUN mvn install -DskipTests

# Unzip
RUN mkdir -p target/dependency && (cd target/dependency; jar -xf ../*.jar)

##### Stage 2 - Let's build a minimal image with the "deployable package"
FROM openjdk:11
VOLUME /tmp

ARG DEPENDENCY=/open-desk/backend/employee-service/target/dependency
COPY --from=microservice-build ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY --from=microservice-build ${DEPENDENCY}/META-INF /app/META-INF
COPY --from=microservice-build ${DEPENDENCY}/BOOT-INF/classes /app
ENTRYPOINT ["java","-cp","app:app/lib/*","github.opendesk.employeeservice.EmployeeServiceApplication"]