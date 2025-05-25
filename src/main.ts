import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      skipMissingProperties: true,
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('Abait API')
    .setDescription('The Abait API ')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));
  SwaggerModule.setup('api', app, documentFactory);
  await app.listen(3000);
}
bootstrap();
