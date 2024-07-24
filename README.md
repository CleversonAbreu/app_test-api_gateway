## Projeto Backend

Projeto parte aplicativo App_test

## Mongo DB

MongoDb Docker via terminal:
docker run -d --name mongo-app_test -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=mongoadmin -p 27018:27017 mongo:6.0

## RabbitMQ Docker Bitnami

RabbitMQ Docker via terminal:
docker pull bitnami/rabbitmq:latest

docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 bitnami/rabbitmq:latest
