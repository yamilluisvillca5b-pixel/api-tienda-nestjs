import {
  IsNumber,
} from 'class-validator';

export class CreateOrdenProductoDto {

  @IsNumber()
  cantidad: number;

  @IsNumber()
  subtotal: number;

  @IsNumber()
  idOrden: number;

  @IsNumber()
  idProducto: number;
}