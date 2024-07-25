import { Module } from '@nestjs/common';
import { ShoesService } from './shoes.service';
import { ShoesController } from './shoes.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ShoesController],
  providers: [ShoesService, PrismaService],
})
export class ShoesModule {}
