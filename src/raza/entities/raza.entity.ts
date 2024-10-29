import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Raza {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'varchar', length: 50 })
  tipoGanado: string;
}
