import { NestFactory } from '@nestjs/core';
import { PowerModule } from './power/power.module';

async function bootstrap() {
  const app = await NestFactory.create(PowerModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
