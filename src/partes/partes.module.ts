import { Module } from '@nestjs/common';
import { PartesService } from './partes.service';
import { PartesController } from './partes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parte } from './entities/parte.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Parte])],
  controllers: [PartesController],
  providers: [PartesService],
})
export class PartesModule { }
