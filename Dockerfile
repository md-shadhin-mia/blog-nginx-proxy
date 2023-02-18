FROM openjdk:17

WORKDIR /app

COPY blog/target/blog-0.0.1-SNAPSHOT.jar .

EXPOSE 8080

CMD ["java", "-jar", "blog-0.0.1-SNAPSHOT.jar"]
