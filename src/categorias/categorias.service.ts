import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Categoria } from './entities/categoria.entity';

import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriasService {

  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  create(createCategoriaDto: CreateCategoriaDto) {

    const nuevaCategoria =
      this.categoriaRepository.create(createCategoriaDto);

    return this.categoriaRepository.save(nuevaCategoria);
  }

  findAll() {
    return this.categoriaRepository.find({
      relations: ['productos'],
    });
  }

  findOne(id: number) {
    return this.categoriaRepository.findOne({
      where: {
        idCategoria: id,
      },

      relations: ['productos'],
    });
  }

  async update(
    id: number,
    updateCategoriaDto: UpdateCategoriaDto,
  ) {

    const categoria =
      await this.findOne(id);

    if (!categoria) {
      throw new NotFoundException(
  'Categoria no encontrada',
);
    }

    Object.assign(categoria, updateCategoriaDto);

    return this.categoriaRepository.save(categoria);
  }

  async remove(id: number) {

    const categoria =
      await this.findOne(id);

    if (!categoria) {
      throw new NotFoundException(
  'Categoria no encontrada',
);
    }

    return this.categoriaRepository.remove(categoria);
  }
}