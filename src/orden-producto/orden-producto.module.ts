import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { OrdenProductoService } from './orden-producto.service';
import { OrdenProductoController } from './orden-producto.controller';

import { OrdenProducto } from './entities/orden-producto.entity';

import { Ordene } from 'src/ordenes/entities/ordene.entity';
import { Producto } from 'src/productos/entities/producto.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      OrdenProducto,
      Ordene,
      Producto,
    ]),
  ],

  controllers: [OrdenProductoController],

  providers: [OrdenProductoService],
})

export class OrdenProductoModule {}