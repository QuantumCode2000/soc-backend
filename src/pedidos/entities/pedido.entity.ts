import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Corte } from '../entities/corte.entity';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  clienteNombre: string;

  @Column()
  descripcion: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fechaCreacion: Date;

  @OneToMany(() => Corte, (corte) => corte.pedido)
  cortes: Corte[];
}
