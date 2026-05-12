import {
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateProductoDto {

  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  descripcion: string;

  @IsNumber()
  precio: number;

  @IsNumber()
  stock: number;

  @IsNumber()
  idCategoria: number;
}