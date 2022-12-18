import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
  
  constructor() {
    super({
      client: {
       clientId: 'notifications',
         brokers: ['KAFKA_BROKER'],
         sasl: {
           mechanism: 'scram-sha-256',
           username: 'KAFKA_USERNAME',
           password: 'KAFKA_PWD',
         },
         ssl: true,
       },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }

}