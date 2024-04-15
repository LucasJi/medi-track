import { ZodFilter } from '@common/filter/zodFilter';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { patchNestJsSwagger } from 'nestjs-zod';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // enable nestjs-zod swagger support
  patchNestJsSwagger();

  // port
  const configService = app.get(ConfigService);
  const port = configService.get('server.port') || 8080;

  // filters
  app.useGlobalFilters(new ZodFilter());

  // swagger
  const config = new DocumentBuilder()
    .setTitle('Medi Track')
    .setDescription('Medi Track Apis')
    .setVersion('1.0')
    .addTag('supplier')
    .addTag('menu')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
}
bootstrap();
