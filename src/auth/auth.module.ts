import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { JwtModule } from '@nestjs/jwt';

const jwtConstants = {
  secret: 'no se lo digas a nadie',
};

@Module({
  imports: [UsuariosModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
      global: true
    })
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule { }
