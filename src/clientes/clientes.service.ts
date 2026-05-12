import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Cliente } from './entities/cliente.entity';
import { CreateClienteDto } from './dto/create-cliente.dto';

@Injectable()
export class ClientesService {

  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {}

  create(createClienteDto: CreateClienteDto) {

    const nuevoCliente =
      this.clienteRepository.create(createClienteDto);

    return this.clienteRepository.save(nuevoCliente);
  }

  findAll() {
    return this.clienteRepository.find();
  }

  findOne(id: number) {
    return this.clienteRepository.findOneBy({
      idCliente: id,
    });
  }
  async update(
  id: number,
  updateClienteDto: any,
) {

  const cliente =
    await this.findOne(id);

if (!cliente) {
  throw new NotFoundException(
    'Cliente no encontrado',
  );
}
  Object.assign(cliente, updateClienteDto);

  return this.clienteRepository.save(cliente);
}

  async remove(id: number) {

  const cliente =
    await this.findOne(id);

 if (!cliente) {
  throw new NotFoundException(
    'Cliente no encontrado',
  );
}

  return this.clienteRepository.remove(cliente);
}
}