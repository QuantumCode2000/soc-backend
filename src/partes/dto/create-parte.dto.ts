import { IsString, IsDate, IsOptional } from 'class-validator';

export class CreateParteDto {
  @IsString()
  novedad: string;

  @IsString()
  motivo: string;

  @IsString()
  fechaSuceso: string;

  @IsString()
  codigo: string;

  @IsString()
  raza: string;

  @IsString()
  color: string;

  @IsString()
  marcaCarimbo: string;

  @IsString()
  sexo: string;

  @IsString()
  categoria: string;

  @IsString()
  fechaNac: string;

  @IsString()
  tipoGanado: string;

  @IsString()
  enInventario: string;

  @IsString()
  unidad: string;

  @IsString()
  nroArete: string;

  @IsOptional()
  @IsDate()
  deletedAt?: Date;
}
