import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Raza } from './entities/raza.entity';
import { CreateRazaDto } from './dto/create-raza.dto';
import { UpdateRazaDto } from './dto/update-raza.dto';

@Injectable()
export class RazaService {
  constructor(
    @InjectRepository(Raza)
    private razaRepository: Repository<Raza>,
  ) {}

  async create(createRazaDto: CreateRazaDto) {
    const raza = this.razaRepository.create(createRazaDto);
    return this.razaRepository.save(raza);
  }

  async findAll() {
    return this.razaRepository.find();
  }

  async findOne(id: number) {
    return this.razaRepository.findOneBy({ id });
  }

  async update(id: number, updateRazaDto: UpdateRazaDto) {
    return this.razaRepository.update(id, updateRazaDto);
  }

  async remove(id: number) {
    return this.razaRepository.softDelete(id);
  }
}
