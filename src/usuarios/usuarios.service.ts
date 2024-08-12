import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {

  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>
  ) { }

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

  // async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
  //   return await this.usuariosRepository.update(id, updateUsuarioDto);
  // }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const { ...rest } = updateUsuarioDto as UpdateUsuarioDto;

    // Solo encriptar la contraseña si se está actualizando
    if (rest.password) {
      rest.password = await bcrypt.hash(rest.password, 10);
    }

    await this.usuariosRepository.update(id, rest);
    return this.findOne(id  );  
  }


  async remove(id: number) {
    return await this.usuariosRepository.softDelete(id);
  }

  async findOneByEmail(email: string) {
    return await this.usuariosRepository.findOneBy({
      email,
    });
  }
}


