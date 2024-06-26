import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(config.SERVER_PORT, () =>
    Logger.log(`Server running on port ${config.SERVER_PORT}`),
  );
}
bootstrap();
