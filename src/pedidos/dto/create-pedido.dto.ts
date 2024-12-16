import { 
  IsString,
  IsNotEmpty, 
  IsArray,
  ValidateNested,  
} from 'class-validator';
import { Type } from 'class-transformer';
export class CreatePedidoDto {
  @IsString()
  @IsNotEmpty()
  clienteNombre: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsString()
  @IsNotEmpty()
  inventarioId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCorteDto)
  cortes: CreateCorteDto[];
}
export class CreateCorteDto {
  @IsString()
  @IsNotEmpty()
  longitud: string;

  @IsString()
  @IsNotEmpty()
  ancho: string;

  @IsNotEmpty()
  //@IsInt()
  //@Min(1)
  cantidad: number;
}