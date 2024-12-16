import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from './entities/pedido.entity';
import { Corte } from './entities/corte.entity';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(Pedido)
    private readonly pedidoRepository: Repository<Pedido>,

    @InjectRepository(Corte)
    private readonly corteRepository: Repository<Corte>,
  ) {}

  async create(createPedidoDto: CreatePedidoDto): Promise<Pedido> {
    const { cortes, ...pedidoData } = createPedidoDto;

    // Crear el pedido
    const pedido = this.pedidoRepository.create(pedidoData);
    await this.pedidoRepository.save(pedido);

    // Crear los cortes asociados al pedido
    const cortesEntities = cortes.map((corteDto) => {
      const corte = this.corteRepository.create({
        ...corteDto,
        pedido, // Asociamos el corte con el pedido
      });
      return corte;
    });

    // Guardamos los cortes en la base de datos
    await this.corteRepository.save(cortesEntities);

    // Actualizamos el pedido con los cortes guardados
    pedido.cortes = cortesEntities;

    // Retornamos el pedido con los cortes
    return pedido;
  }

  async findAll(): Promise<Pedido[]> {
    return this.pedidoRepository.find({ relations: ['cortes'] }); // Incluimos los cortes al obtener todos los pedidos
  }

  async findOne(id: string): Promise<Pedido> {
    const pedido = await this.pedidoRepository.findOne({ where: { id }, relations: ['cortes'] }); // Incluimos los cortes
    if (!pedido) {
      throw new NotFoundException(`Pedido con ID ${id} no encontrado`);
    }
    return pedido;
  }

  async update(id: string, updatePedidoDto: UpdatePedidoDto): Promise<Pedido> {
    const pedido = await this.findOne(id);
    Object.assign(pedido, updatePedidoDto);
    return await this.pedidoRepository.save(pedido);
  }

  async remove(id: string): Promise<void> {
    const pedido = await this.findOne(id);
    await this.pedidoRepository.remove(pedido);
  }
}
