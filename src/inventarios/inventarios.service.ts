import { Injectable } from '@nestjs/common';
import { CreateInventarioDto } from './dto/create-inventario.dto';
import { UpdateInventarioDto } from './dto/update-inventario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inventario } from './entities/inventario.entity';

@Injectable()
export class InventariosService {

  constructor(
    @InjectRepository(Inventario)
    private inventariosRepository: Repository<Inventario>
  ) { }

  async create(createInventarioDto: CreateInventarioDto) {
    const inventario = this.inventariosRepository.create(createInventarioDto);
    return this.inventariosRepository.save(inventario);
  }

  async findAll() {
    return await this.inventariosRepository.find();
  }

  async findOne(id: number) {
    return await this.inventariosRepository.findOneBy({ id });
  }

  async update(id: number, updateInventarioDto: UpdateInventarioDto) {
    return await this.inventariosRepository.update(id, updateInventarioDto);
  }

  async remove(id: number) {
    return await this.inventariosRepository.softDelete(id);
  }
}
