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
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "",
    database: "soc",
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
