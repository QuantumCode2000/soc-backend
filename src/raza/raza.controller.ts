import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RazaService } from './raza.service';
import { CreateRazaDto } from './dto/create-raza.dto';
import { UpdateRazaDto } from './dto/update-raza.dto';

@Controller('razas')
export class RazaController {
  constructor(private readonly razaService: RazaService) {}

  @Post()
  create(@Body() createRazaDto: CreateRazaDto) {
    return this.razaService.create(createRazaDto);
  }

  @Get()
  findAll() {
    return this.razaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.razaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRazaDto: UpdateRazaDto) {
    return this.razaService.update(+id, updateRazaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.razaService.remove(+id);
  }
}
