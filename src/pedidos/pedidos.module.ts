import { Module } from '@nestjs/common';
import { PedidosService } from '../pedidos/pedidos.service';
import { PedidosController } from '../pedidos/pedidos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from '../pedidos/entities/pedido.entity';
import { Corte } from '../pedidos/entities/corte.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Pedido, Corte])],
  controllers: [PedidosController],
  providers: [PedidosService],
  exports: [PedidosService],
})
export class PedidosModule {}
