import {
  Entity, PrimaryGeneratedColumn, Column,
  CreateDateColumn, UpdateDateColumn
  , DeleteDateColumn
} from 'typeorm';

@Entity()
export class Inventario {
  @PrimaryGeneratedColumn()
  id: number;

  /*@Column({ type: 'varchar', length: 20 })
  codigo: string;

  @Column({ type: 'varchar', length: 50 })
  raza: string;

  @Column({ type: 'varchar', length: 50 })
  color: string;

  @Column({ type: 'varchar', length: 50 })
  marcaCarimbo: string;

  @Column({ type: 'varchar', length: 10 })
  sexo: string;

  @Column({ type: 'varchar', length: 50 })
  categoria: string;

  @Column({ type: 'date' })
  fechaNac: Date;

  @Column({ type: 'varchar', length: 50 })
  tipoGanado: string;

  @Column({ type: 'varchar', length: 10 })
  enInventario: string;

  @Column({ type: 'varchar', length: 100 })
  unidad: string;

  @Column({ type: 'varchar', length: 20 })
  nroArete: string;*/

  @Column({ type: 'varchar', length: 50, unique: true })
  iDLamina: string; // ID de la lámina

  @Column({ type: 'varchar', length: 100 })
  tipoLamina: string; // Tipo de Lámina

  @Column({ type: 'varchar', length: 50 })
  dimensionesLamina: string; // Dimensiones de la Lámina (Ancho x Alto)

  @Column({ type: 'varchar' })
  cantidadDisponible: string; // Cantidad Disponible

  @Column({ type: 'varchar' })
  espesor: string; // Espesor de la Lámina

  @Column({ type: 'varchar', length: 50 })
  color: string; // Color

  @Column({ type: 'varchar' })
  fechaIngreso: string; // Fecha de Ingreso al Inventario

  @Column({ type: 'varchar', length: 20 })
  estado: string; // Estado (Disponible/Agotado)

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
