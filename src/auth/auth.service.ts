import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly INVALID_EMAIL_MSG = 'El correo electrónico es inválido.';
  private readonly INVALID_PASSWORD_MSG = 'La contraseña es incorrecta.';

  constructor(
    private readonly usersService: UsuariosService,
    private readonly jwtService: JwtService,
  ) {}

  async login({ email, password }: LoginDto) {
    const user = await this.usersService.findOneByEmail(email);

    if (!user) {
      throw new UnauthorizedException('El correo electrónico es inválido.');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('La contraseña es incorrecta.');
    }

    const payload = {
      sub: user.id,
      email: user.email,
      rol: user.rol,
    };

    const token = await this.jwtService.signAsync(payload, {
      expiresIn: '1h',
    });

    return {
      email: user.email,
      rol: user.rol,
      token: token,
      nombreCompleto:
        `${user.nombre} ${user.apellidoPaterno} ${user.apellidoMaterno || ''}`.trim(),
    };
  }
}
