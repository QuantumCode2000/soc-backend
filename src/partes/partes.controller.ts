import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PartesService } from './partes.service';
import { CreateParteDto } from './dto/create-parte.dto';
import { UpdateParteDto } from './dto/update-parte.dto';

@Controller('partes')
export class PartesController {
  constructor(private readonly partesService: PartesService) {}

  @Post()
  create(@Body() createParteDto: CreateParteDto) {
    return this.partesService.create(createParteDto);
  }

  @Get()
  findAll() {
    return this.partesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParteDto: UpdateParteDto) {
    return this.partesService.update(+id, updateParteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partesService.remove(+id);
  }
}
