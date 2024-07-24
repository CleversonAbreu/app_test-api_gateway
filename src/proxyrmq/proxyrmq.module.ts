import { Module } from '@nestjs/common';
import { ClientProxyAppTest } from './client-proxy';

@Module({
    providers:[ClientProxyAppTest],
    exports:[ClientProxyAppTest]
})
export class ProxyRMQModule {}
