import {
  IsDateString,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateOrdeneDto {

  @IsDateString()
  fecha: Date;

  @IsString()
  estado: string;

  @IsNumber()
  total: number;

  @IsNumber()
  idCliente: number;
}