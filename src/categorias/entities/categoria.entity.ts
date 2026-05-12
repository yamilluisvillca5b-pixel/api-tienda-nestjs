import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Producto } from 'src/productos/entities/producto.entity';

@Entity()
export class Categoria {

  @PrimaryGeneratedColumn()
  idCategoria: number;

  @Column({
    unique: true,
    length: 100,
  })
  nombre: string;

  @Column({
    nullable: true,
    length: 250,
  })
  descripcion: string;

  @CreateDateColumn()
  creadoEn: Date;

  @UpdateDateColumn()
  actualizadoEn: Date;

  @DeleteDateColumn()
  eliminadoEn: Date;

  @OneToMany(() => Producto, (producto) => producto.categoria)
  productos: Producto[];
}