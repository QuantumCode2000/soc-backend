import {
  IsNotEmpty,
  IsInt,
  ValidateNested,
  IsArray,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCorteDto {
  @IsInt()
  @IsNotEmpty()
  @Type(() => Number) // Transforma el valor a número
  longitud: number;

  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  ancho: number;

  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  cantidad: number;
}

export class CreatePedidoDto {
  @IsString()
  @IsNotEmpty()
  clienteNombre: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCorteDto)
  cortes: CreateCorteDto[];
}
