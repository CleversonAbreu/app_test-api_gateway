import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { ProxyRMQModule } from './proxyrmq/proxyrmq.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule,ProxyRMQModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
