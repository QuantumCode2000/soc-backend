import { Transform } from "class-transformer";
import { IsEmail, IsString, MinLength, MaxLength } from "class-validator";

export class LoginDto {
  @IsEmail({}, { message: 'El email debe ser una dirección de correo electrónico válida' })
  @MaxLength(100, { message: 'El email no puede exceder los 100 caracteres' })
  email: string;

  @IsString({ message: 'La contraseña debe ser una cadena de texto' })
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  @MaxLength(255, { message: 'La contraseña no puede exceder los 255 caracteres' })
  @Transform(({ value }) => value.trim(), { toClassOnly: true })
  password: string;
}
