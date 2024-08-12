import { PartialType } from '@nestjs/mapped-types';
import { CreateParteDto } from './create-parte.dto';

export class UpdateParteDto extends PartialType(CreateParteDto) {}
