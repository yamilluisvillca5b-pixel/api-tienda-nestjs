import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Ordene } from 'src/ordenes/entities/ordene.entity';

@Entity()
export class Cliente {

  @PrimaryGeneratedColumn()
  idCliente: number;

  @Column()
  nombres: string;

  @Column()
  paterno: string;

  @Column()
  materno: string;

  @Column({ unique: true })
  email: string;

  @CreateDateColumn()
  creadoEn: Date;

  @UpdateDateColumn()
  actualizadoEn: Date;

  @DeleteDateColumn()
  eliminadoEn: Date;

  @OneToMany(() => Ordene, (orden) => orden.cliente)
  ordenes: Ordene[];
}