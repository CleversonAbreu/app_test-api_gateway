import { Injectable } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";

@Injectable()
export class ClientProxyAppTest{

    getClientProxyUserBackendInstance(): ClientProxy{
        return ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: ['amqp://newuser:bitnami@localhost:5672/app_test'],
                queue: 'user-backend', 
                queueOptions: {
                    durable: true, 
                },
            },
        })
    }
}