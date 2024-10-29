import { PartialType } from '@nestjs/mapped-types';
import { CreateRazaDto } from './create-raza.dto';

export class UpdateRazaDto extends PartialType(CreateRazaDto) {}
