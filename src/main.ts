import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // تنظیم Swagger
  const config = new DocumentBuilder()
    .setTitle('API Example')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('users') // تگ مرتبط با این API
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();

// app.useGlobalPipes(
//   new ValidationPipe({
//     whitelist: true, // فیلدهای اضافی حذف می‌شوند
//     forbidNonWhitelisted: true, // خطا در صورت وجود فیلد اضافی
//     transform: true, // ورودی‌ها را به نوع DTO تبدیل می‌کند
//   }),
// );

// .addBearerAuth(
//   //authorize
//   {
//     type: 'http',
//     scheme: 'bearer',
//     bearerFormat: 'JWT',
//     name: 'JWT',
//     description: 'Enter JWT token',
//     in: 'header',
//   },
//   'token', // This name here is important for matching up with @ApiBearerAuth() in your controller!
// )
