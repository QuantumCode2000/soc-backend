// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { ValidationPipe } from '@nestjs/common';
// import { Logger } from '@nestjs/common';



// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.enableCors();
//   app.setGlobalPrefix(process.env.GLOBAL_PREFIX);
//   app.useGlobalPipes(
//     new ValidationPipe({
//       whitelist: true,
//       forbidNonWhitelisted: true,
//       transform: true,

//     })
//   )
//   await app.listen(3000);
// }
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger, HttpException, HttpStatus } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

  // Habilitar CORS
  app.enableCors();

  // Configurar el prefijo global para las rutas
  app.setGlobalPrefix("api/v1");

  // Configurar el Logger
  app.useLogger(['log', 'error', 'warn', 'debug', 'verbose']); // Configura los niveles de log

  // Configurar Validación Global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Middleware para registrar todas las peticiones HTTP
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

  // Middleware para capturar y registrar errores
  app.use((err, req, res, next) => {
    if (err instanceof HttpException) {
      const status = err.getStatus();
      const errorResponse = err.getResponse();

      // Registrar el mensaje de error en la terminal
      if (typeof errorResponse === 'object' && errorResponse !== null) {
        const message = (errorResponse as any).message || err.message;
        logger.error(
          `Error ${status}: ${message}`,
          err.stack,
        );
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

  // Iniciar la aplicación
  await app.listen(3000);
  logger.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
