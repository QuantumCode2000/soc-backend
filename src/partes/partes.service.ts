import { Injectable } from '@nestjs/common';
import { CreateParteDto } from './dto/create-parte.dto';
import { UpdateParteDto } from './dto/update-parte.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Parte } from './entities/parte.entity';

@Injectable()
export class PartesService {

  constructor(
    @InjectRepository(Parte)
    private partesRepository: Repository<Parte>
  ) { }

  async create(createParteDto: CreateParteDto) {
    const parte = this.partesRepository.create(createParteDto);
    return await this.partesRepository.save(parte);
  }

  async findAll() {
    return await this.partesRepository.find();
  }

  async findOne(id: number) {
    return await this.partesRepository.findOneBy({ id });
  }

  async update(id: number, updateParteDto: UpdateParteDto) {
    return await this.partesRepository.update(id, updateParteDto);

  }

  async remove(id: number) {
    return await this.partesRepository.softDelete(id);
  }
}
