import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Producto } from './entities/producto.entity';
import { Categoria } from 'src/categorias/entities/categoria.entity';

import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Injectable()
export class ProductosService {

  constructor(

    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,

    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  async create(createProductoDto: CreateProductoDto) {

    const categoria =
      await this.categoriaRepository.findOneBy({
        idCategoria: createProductoDto.idCategoria,
      });

    if (!categoria) {
      throw new NotFoundException(
  'Categoria no encontrada',
);
    }

    const nuevoProducto =
      this.productoRepository.create({
        nombre: createProductoDto.nombre,
        descripcion: createProductoDto.descripcion,
        precio: createProductoDto.precio,
        stock: createProductoDto.stock,
        categoria,
      });

    return this.productoRepository.save(nuevoProducto);
  }

  findAll() {
    return this.productoRepository.find({
      relations: ['categoria'],
    });
  }

  findOne(id: number) {
    return this.productoRepository.findOne({
      where: {
        idProducto: id,
      },

      relations: ['categoria'],
    });
  }

  async update(
    id: number,
    updateProductoDto: UpdateProductoDto,
  ) {

    const producto =
      await this.findOne(id);

    if (!producto) {
      throw new NotFoundException(
  'Producto no encontrado',
);
    }

    Object.assign(producto, updateProductoDto);

    return this.productoRepository.save(producto);
  }

  async remove(id: number) {

    const producto =
      await this.findOne(id);

    if (!producto) {
      throw new NotFoundException(
  'Producto no encontrado',
);
    }

    return this.productoRepository.remove(producto);
  }
}