import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  ManyToOne,
} from 'typeorm';

import { Pedido } from '../entities/pedido.entity';

@Entity()
export class Corte {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  longitud: string;

  @Column()
  ancho: string;

  @Column({ type: 'int' })
  cantidad: number;

  @ManyToOne(() => Pedido, (pedido) => pedido.cortes, { onDelete: 'CASCADE' })
  pedido: Pedido;
}
