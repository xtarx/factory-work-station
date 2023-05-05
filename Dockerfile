# Use a base image with JDK installed
FROM adoptopenjdk:11-jdk-hotspot

# Set the working directory inside the container
WORKDIR /app

# Copy the JAR file to the container
COPY target/workstation.jar app.jar

# Expose the port on which the Spring Boot application will listen
EXPOSE 8080

# Set the entry point to run the Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]
