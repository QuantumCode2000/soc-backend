import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { InventariosModule } from './inventarios/inventarios.module';
import { PartesModule } from './partes/partes.module';
import { RazaModule } from './raza/raza.module';

@Module({
  imports: [ConfigModule.forRoot(
    {
      isGlobal: true,
    }
  ), UsuariosModule,
  TypeOrmModule.forRoot({
    type: process.env.DATABASE_TYPE as any,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    autoLoadEntities: true,
    synchronize: true,
    logging: true,
  }),
    AuthModule,
    InventariosModule,
    PartesModule,
    RazaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
