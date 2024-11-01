import { IsString, IsEmail, IsOptional, Length, Matches } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @Length(1, 20)
  ci: string;

  @IsString()
  @Length(1, 5)
  extension: string;

  //@IsString()
  //@Length(1, 50)
  //grado: string;

 // @IsString()
  //@Length(0, 50)
  //especialidad: string;

  @IsString()
  @Length(1, 100)
  nombre: string;

  @IsString()
  @Length(1, 100)
  apellidoPaterno: string;

  @IsOptional()
  @IsString()
  @Length(1, 100)
  apellidoMaterno?: string;

  @IsEmail()
  @Length(1, 100)
  email: string;

  @IsString()
  @Length(8, 255)
  password: string;

  @IsOptional()
  @IsString()
  @Length(1, 255)
  inSystemPermissions?: string;

  @IsString()
  @Length(1, 50)
  rol: string;

  @IsString()
  @Length(1, 20)
  estado: string;

  //@IsString()
  //@Length(1, 100)
  //unidad: string;
}
