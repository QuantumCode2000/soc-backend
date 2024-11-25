import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class Inventario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, unique: true })
  iDLamina: string;

  @Column({ type: 'varchar', length: 100 })
  tipoLamina: string;

  @Column({ type: 'varchar', length: 50 })
  dimensionesLamina: string;

  @Column({ type: 'varchar' })
  cantidadDisponible: string;

  @Column({ type: 'varchar' })
  espesor: string;

  @Column({ type: 'varchar', length: 50 })  
  color: string;

  @Column({ type: 'varchar' })
  fechaIngreso: string;

  @Column({ type: 'varchar', length: 20 })
  estado: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
