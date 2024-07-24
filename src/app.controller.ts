import { Controller, Get, Logger } from '@nestjs/common';

@Controller('api/v1')
export class AppController {
  @Get()
  getHello(): string {
    return String(process.env.NODE_ENV)
  }
}
