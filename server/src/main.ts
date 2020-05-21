import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as mongoose from 'mongoose';

async function bootstrap() {
  // 连接数据库
  mongoose.connect('mongodb://127.0.0.1:27017/bdcrm', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

  const app = await NestFactory.create(AppModule);

  // swagger接口文档
  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000, function() {
    console.log(`服务启动: http://localhost:3000`);
  });
}
bootstrap();
