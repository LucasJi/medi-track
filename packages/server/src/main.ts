import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // port
  const configService = app.get(ConfigService);
  const port = configService.get('SERVER_PORT') || 8080;

  await app.listen(port);
}
bootstrap();
