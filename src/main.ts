import { FallbackExceptionFilter } from './filters/fallback.filter';
import { HttpExceptionFilter } from './filters/http.filter';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationError, ValidationPipe } from '@nestjs/common';
import { ValidationFilter } from './filters/validation.filter';
import { ValidationException } from './filters/validation.exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalFilters(new FallbackExceptionFilter(), new HttpExceptionFilter(), new ValidationFilter());

  app.useGlobalPipes(new ValidationPipe({
    skipMissingProperties: true,
    exceptionFactory: (errors: ValidationError[]) => {
      const messages = errors.map((error) => {
        return `${error.property} has wrong value ${error.value},${Object.values(error.constraints).join(', ')}`
      })

      return new ValidationException(messages);
    }
  }));

  await app.listen(3000);
}
bootstrap();
