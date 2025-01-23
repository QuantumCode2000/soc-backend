import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService implements OnModuleInit {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
  ) {}

  async onModuleInit() {
    // Crear usuarios por defecto
    const usuariosPorDefecto: CreateUsuarioDto[] = [
      {
        ci: '12345678',
        extension: 'LP',
        nombre: 'Admin',
        apellidoPaterno: 'Default',
        apellidoMaterno: 'Admin',
        email: 'admin@example.com',
        password: 'admin1234', // Contraseña plana
        rol: 'administrador',
        estado: 'activo',
      },
      {
        ci: '87654321',
        extension: 'SC',
        nombre: 'Usuario',
        apellidoPaterno: 'Default',
        apellidoMaterno: 'User',
        email: 'usuario@example.com',
        password: 'user1234', // Contraseña plana
        rol: 'usuario',
        estado: 'activo',
      },
    ];

    for (const usuarioDto of usuariosPorDefecto) {
      const existeUsuario = await this.usuariosRepository.findOneBy({
        email: usuarioDto.email,
      });

      if (!existeUsuario) {
        // Crear usuario directamente
        const usuario = this.usuariosRepository.create(usuarioDto);
        await this.usuariosRepository.save(usuario);
      }
    }
  }

  async create(createUsuarioDto: CreateUsuarioDto) {
    const usuario = this.usuariosRepository.create(createUsuarioDto);
    return await this.usuariosRepository.save(usuario);
  }

  async findAll() {
    return await this.usuariosRepository.find();
  }

  async findOne(id: number) {
    return await this.usuariosRepository.findOneBy({ id });
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const { password, ...rest } = updateUsuarioDto;

    // Solo actualiza el password si está presente
    if (password) {
      const usuario = await this.usuariosRepository.findOneBy({ id });
      if (usuario) {
        usuario.password = password; // Se rehasheará automáticamente por @BeforeInsert
        await this.usuariosRepository.save(usuario);
      }
    }

    await this.usuariosRepository.update(id, rest);
    return this.findOne(id);
  }

  async remove(id: number) {
    return await this.usuariosRepository.softDelete(id);
  }

  async findOneByEmail(email: string) {
    return await this.usuariosRepository.findOneBy({ email });
  }
}
