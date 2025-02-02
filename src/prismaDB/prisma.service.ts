import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      log: ['query', 'info', 'warn', 'error'], // برای Debug
    });
  }

  async onModuleInit() {
    await this.$connect(); // اتصال به پایگاه داده
  }

  async onModuleDestroy() {
    await this.$disconnect(); // قطع اتصال هنگام بسته شدن ماژول
  }

  // تابعی برای اجرای یک تراکنش (اختیاری)
  async transaction(actions: any[]) {
    return this.$transaction(actions);
  }
}
