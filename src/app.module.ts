import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { InventariosModule } from './inventarios/inventarios.module';
import { PedidosModule } from './pedidos/pedidos.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsuariosModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'quantum',
      password: 'quantum',
      database: 'socdb',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    AuthModule,
    InventariosModule,
    PedidosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
