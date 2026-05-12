import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Categoria } from 'src/categorias/entities/categoria.entity';
import { OneToMany } from 'typeorm';
import { OrdenProducto } from 'src/orden-producto/entities/orden-producto.entity';

@Entity()
export class Producto {

  @PrimaryGeneratedColumn()
  idProducto: number;

  @Column({
    length: 150,
  })
  nombre: string;

  @Column({
    nullable: true,
    length: 300,
  })
  descripcion: string;

  @Column('decimal')
  precio: number;

  @Column()
  stock: number;

  @CreateDateColumn()
  creadoEn: Date;

  @UpdateDateColumn()
  actualizadoEn: Date;

  @DeleteDateColumn()
  eliminadoEn: Date;

  @ManyToOne(() => Categoria, (categoria) => categoria.productos)
  categoria: Categoria;

  @OneToMany(() => OrdenProducto, (detalle) => detalle.producto)
detalles: OrdenProducto[];
}