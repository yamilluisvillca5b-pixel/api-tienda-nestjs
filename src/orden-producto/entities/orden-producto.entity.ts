import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Ordene } from 'src/ordenes/entities/ordene.entity';
import { Producto } from 'src/productos/entities/producto.entity';

@Entity()
export class OrdenProducto {

  @PrimaryGeneratedColumn()
  idOrdenProducto: number;

  @Column()
  cantidad: number;

  @Column('decimal')
  subtotal: number;

  @ManyToOne(() => Ordene, (orden) => orden.detalles)
  orden: Ordene;

  @ManyToOne(() => Producto, (producto) => producto.detalles)
  producto: Producto;
}