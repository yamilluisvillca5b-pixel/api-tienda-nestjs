import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Cliente } from 'src/clientes/entities/cliente.entity';
import { OrdenProducto } from 'src/orden-producto/entities/orden-producto.entity';

@Entity()
export class Ordene {

  @PrimaryGeneratedColumn()
  idOrden: number;

  @Column({
    type: 'date',
  })
  fecha: Date;

  @Column({
    default: 'PENDIENTE',
  })
  estado: string;

  @Column('decimal', {
    default: 0,
  })
  total: number;

  @CreateDateColumn()
  creadoEn: Date;

  @UpdateDateColumn()
  actualizadoEn: Date;

  @ManyToOne(() => Cliente, (cliente) => cliente.ordenes)
  cliente: Cliente;

  @OneToMany(() => OrdenProducto, (detalle) => detalle.orden)
  detalles: OrdenProducto[];
}