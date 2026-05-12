import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Ordene } from './entities/ordene.entity';
import { Cliente } from 'src/clientes/entities/cliente.entity';

import { CreateOrdeneDto } from './dto/create-ordene.dto';
import { UpdateOrdeneDto } from './dto/update-ordene.dto';

@Injectable()
export class OrdenesService {

  constructor(

    @InjectRepository(Ordene)
    private ordenRepository: Repository<Ordene>,

    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {}

  async create(createOrdeneDto: CreateOrdeneDto) {

    const cliente =
      await this.clienteRepository.findOneBy({
        idCliente: createOrdeneDto.idCliente,
      });

    if (!cliente) {
      return {
        mensaje: 'Cliente no encontrado',
      };
    }

    const nuevaOrden =
      this.ordenRepository.create({
        fecha: createOrdeneDto.fecha,
        estado: createOrdeneDto.estado,
        total: createOrdeneDto.total,
        cliente,
      });

    return this.ordenRepository.save(nuevaOrden);
  }

  findAll() {
    return this.ordenRepository.find({
      relations: ['cliente'],
    });
  }

  findOne(id: number) {
    return this.ordenRepository.findOne({
      where: {
        idOrden: id,
      },

      relations: ['cliente'],
    });
  }

  async update(
    id: number,
    updateOrdeneDto: UpdateOrdeneDto,
  ) {

    const orden =
      await this.findOne(id);

    if (!orden) {
     throw new NotFoundException(
  'Orden no encontrada',
);
    }

    Object.assign(orden, updateOrdeneDto);

    return this.ordenRepository.save(orden);
  }

  async remove(id: number) {

    const orden =
      await this.findOne(id);

    if (!orden) {
     throw new NotFoundException(
  'Orden no encontrada',
);
    }

    return this.ordenRepository.remove(orden);
  }
}