import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { OrdenProducto } from './entities/orden-producto.entity';

import { Ordene } from 'src/ordenes/entities/ordene.entity';
import { Producto } from 'src/productos/entities/producto.entity';

import { CreateOrdenProductoDto } from './dto/create-orden-producto.dto';
import { UpdateOrdenProductoDto } from './dto/update-orden-producto.dto';

@Injectable()
export class OrdenProductoService {

  constructor(

    @InjectRepository(OrdenProducto)
    private ordenProductoRepository:
      Repository<OrdenProducto>,

    @InjectRepository(Ordene)
    private ordenRepository: Repository<Ordene>,

    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
  ) {}

  async create(
    createOrdenProductoDto: CreateOrdenProductoDto,
  ) {

    const orden =
      await this.ordenRepository.findOneBy({
        idOrden: createOrdenProductoDto.idOrden,
      });

    if (!orden) {
      throw new NotFoundException(
  'Orden no encontrada',
);
    }

    const producto =
      await this.productoRepository.findOneBy({
        idProducto: createOrdenProductoDto.idProducto,
      });

    if (!producto) {
      throw new NotFoundException(
  'Producto no encontrado',
);
    }

    const nuevoDetalle =
      this.ordenProductoRepository.create({
        cantidad: createOrdenProductoDto.cantidad,
        subtotal: createOrdenProductoDto.subtotal,
        orden,
        producto,
      });

    return this.ordenProductoRepository.save(
      nuevoDetalle,
    );
  }

  findAll() {
    return this.ordenProductoRepository.find({
      relations: [
        'orden',
        'producto',
      ],
    });
  }

  findOne(id: number) {
    return this.ordenProductoRepository.findOne({
      where: {
        idOrdenProducto: id,
      },

      relations: [
        'orden',
        'producto',
      ],
    });
  }

  async update(
    id: number,
    updateOrdenProductoDto: UpdateOrdenProductoDto,
  ) {

    const detalle =
      await this.findOne(id);

    if (!detalle) {
      throw new NotFoundException(
  'Detalle no encontrado',
);
    }

    Object.assign(detalle, updateOrdenProductoDto);

    return this.ordenProductoRepository.save(
      detalle,
    );
  }

  async remove(id: number) {

    const detalle =
      await this.findOne(id);

    if (!detalle) {
      throw new NotFoundException(
  'Detalle no encontrado',
);
    }

    return this.ordenProductoRepository.remove(
      detalle,
    );
  }
}