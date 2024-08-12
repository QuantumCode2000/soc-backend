import { IsString, IsDateString, IsOptional, Length } from 'class-validator';

export class CreateInventarioDto {
  @IsString()
  @Length(1, 20)
  codigo: string;

  @IsString()
  @Length(1, 50)
  raza: string;

  @IsString()
  @Length(1, 50)
  color: string;

  @IsString()
  @Length(1, 50)
  marcaCarimbo: string;

  @IsString()
  @Length(1, 10)
  sexo: string;

  @IsString()
  @Length(1, 50)
  categoria: string;

  @IsDateString()
  fechaNac: string;

  @IsString()
  @Length(1, 50)
  tipoGanado: string;

  @IsString()
  @Length(1, 10)
  enInventario: string;

  @IsString()
  @Length(1, 100)
  unidad: string;

  @IsString()
  @Length(1, 20)
  nroArete: string;
}
