import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn, BeforeInsert } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20, unique: true })
  ci: string;

  @Column({ type: 'varchar', length: 5 })
  extension: string;

  //@Column({ type: 'varchar', length: 50 })
  //grado: string;

  //@Column({ type: 'varchar', length: 50 })
  //especialidad: string;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'varchar', length: 100 })
  apellidoPaterno: string;

  @Column({ type: 'varchar', length: 100 })
  apellidoMaterno: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  inSystemPermissions: string;

  @Column({ type: 'varchar', length: 50 })
  rol: string;

  @Column({ type: 'varchar', length: 20 })
  estado: string;

  //@Column({ type: 'varchar', length: 100 })
  //unidad: string;

  @DeleteDateColumn()
  deletedAt: Date;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
