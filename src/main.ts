import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Inicializar Passport (sem usar sessões)
  app.use(passport.initialize());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
