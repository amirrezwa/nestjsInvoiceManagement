import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { InvoiceModule } from './invoice/invoice.module';
import { ErrorHandlerMiddleware } from './error-handler/error-handler.middleware';

@Module({
  imports: [AuthModule, UserModule, InvoiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ErrorHandlerMiddleware).forRoutes('*');
  }
}
