import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { ProxyRMQModule } from 'src/proxyrmq/proxyrmq.module';

@Module({
  imports:[ProxyRMQModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
