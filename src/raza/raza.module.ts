import { Module } from '@nestjs/common';
import { RazaService } from './raza.service';
import { RazaController } from './raza.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Raza } from './entities/raza.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Raza])],
  controllers: [RazaController],
  providers: [RazaService],
})
export class RazaModule {}
