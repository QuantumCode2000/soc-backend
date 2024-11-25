import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  ValidationPipe,
  Logger,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

  app.enableCors();

  app.setGlobalPrefix('api/v1');

  app.useLogger(['log', 'error', 'warn', 'debug', 'verbose']);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.use((req, res, next) => {
    const { method, originalUrl } = req;
    const startTime = Date.now();

    res.on('finish', () => {
      const { statusCode } = res;
      const contentLength = res.get('content-length');
      const elapsedTime = Date.now() - startTime;

      logger.log(
        `${method} ${originalUrl} ${statusCode} ${contentLength} - ${elapsedTime}ms`,
        'HTTP',
      );
    });

    next();
  });

  app.use((err, req, res, next) => {
    if (err instanceof HttpException) {
      const status = err.getStatus();
      const errorResponse = err.getResponse();

      if (typeof errorResponse === 'object' && errorResponse !== null) {
        const message = (errorResponse as any).message || err.message;
        logger.error(`Error ${status}: ${message}`, err.stack);
      } else {
        logger.error(`Error ${status}: ${err.message}`, err.stack);
      }

      res.status(status).json(errorResponse);
    } else {
      logger.error('Unexpected Error', err.stack);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Internal Server Error',
      });
    }

    next();
  });

  await app.listen(3000);
  logger.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
