import { IsString, IsDateString, IsOptional, Length } from 'class-validator';

export class CreateInventarioDto {
  /*@IsString()
  @Length(1, 20)
  iDLamina: string;

  @IsString()
  @Length(1, 50)
  tipoLamina: string;

  @IsString()
  @Length(1, 50)
  dimensionesLamina: string;

  @IsString()
  @Length(1, 50)
  cantidadDisponible: string;

  @IsString()
  @Length(1, 10)
  espesor: string;

  @IsString()
  @Length(1, 50)
  color: string;

  @IsDateString()
  fechaIngreso: string;

  @IsString()
  @Length(1, 50)
  estado: string;

  //@IsString()
  //@Length(1, 10)
  //enInventario: string;

  //@IsString()
  //@Length(1, 100)
  //unidad: string;

  //@IsString()
  //@Length(1, 20)
  //nroArete: string;*/
  @IsString()
  @Length(1, 50)
  iDLamina: string;

  @IsString()
  @Length(1, 50)
  tipoLamina: string;

  @IsString()
  @Length(1, 50)
  dimensionesLamina: string;

  @IsString()
  @Length(1, 50)
  cantidadDisponible: string;

  @IsString()
  @Length(1, 50)
  espesor: string;

  @IsString()
  @Length(1, 50)
  color: string;

  @IsDateString()
  @Length(1, 50)
  fechaIngreso: string;

  @IsString()
  @Length(1, 50)
  estado: string;
}
