import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import * as bcrypt from 'bcrypt';

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
        // Hashear la contraseña y guardar usuario
        const usuario = this.usuariosRepository.create({
          ...usuarioDto,
          password: await bcrypt.hash(usuarioDto.password, 10),
        });
        await this.usuariosRepository.save(usuario);
      }
    }
  }

  async create(createUsuarioDto: CreateUsuarioDto) {
    const usuario = this.usuariosRepository.create({
      ...createUsuarioDto,
      password: await bcrypt.hash(createUsuarioDto.password, 10), // Hash de contraseña
    });
    return await this.usuariosRepository.save(usuario);
  }

  async findAll() {
    return await this.usuariosRepository.find();
  }

  async findOne(id: number) {
    return await this.usuariosRepository.findOneBy({ id });
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const { ...rest } = updateUsuarioDto;

    if (rest.password) {
      rest.password = await bcrypt.hash(rest.password, 10);
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
