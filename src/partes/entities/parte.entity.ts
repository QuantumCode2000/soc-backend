import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class Parte {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  novedad: string;

  @Column()
  motivo: string;

  @Column()
  fechaSuceso: string;

  @Column()
  codigo: string;

  @Column()
  raza: string;

  @Column()
  color: string;

  @Column()
  marcaCarimbo: string;

  @Column()
  sexo: string;

  @Column()
  categoria: string;

  @Column()
  fechaNac: string;

  @Column()
  tipoGanado: string;

  @Column()
  enInventario: string;

  @Column()
  unidad: string;

  @Column()
  nroArete: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
