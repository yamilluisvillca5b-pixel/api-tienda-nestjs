import {
  IsEmail,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateClienteDto {

  @IsString()
  @IsNotEmpty()
  nombres: string;

  @IsString()
  @IsNotEmpty()
  paterno: string;

  @IsString()
  @IsNotEmpty()
  materno: string;

  @IsEmail()
  email: string;
}