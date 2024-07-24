import { Body, Controller, Logger, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ClientProxyAppTest } from 'src/proxyrmq/client-proxy';
import { CreateUserDto } from './dtos/create-user.dto';
import { Observable } from 'rxjs';

@Controller('api/v1/users')
export class UsersController {
    private logger = new Logger(UsersController.name)

    constructor(private clientProxyAppTest: ClientProxyAppTest){}

    private clientUserBackend = this.clientProxyAppTest.getClientProxyUserBackendInstance()

    @Post()
    @UsePipes(ValidationPipe) 
    async criarLogador(@Body() createUserDto:CreateUserDto){
       this.logger.log(`createUserDto: ${JSON.stringify(createUserDto)}`)
     await this.clientUserBackend.emit('create-user',createUserDto)
    }
}
