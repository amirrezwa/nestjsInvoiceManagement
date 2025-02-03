import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';

// بارگذاری متغیرهای محیطی از `.env.test`
dotenv.config({ path: '.env.test' });

const prisma = new PrismaClient();

module.exports = async () => {
  try {
    console.log('🔄 Setting up test database...');

    // اتصال به دیتابیس
    await prisma.$connect();

    // پاک کردن داده‌های قبلی (اختیاری)
    await prisma.user.deleteMany();
    await prisma.invoice.deleteMany();

    console.log('✅ Test database is ready.');
  } catch (error) {
    console.error('❌ Error setting up test database:', error);
  }
};
