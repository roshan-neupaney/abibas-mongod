import { Module } from '@nestjs/common';
import { AnimalCategoryService } from './animal-category.service';
import { AnimalCategoryController } from './animal-category.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AnimalCategoryController],
  providers: [AnimalCategoryService, PrismaService],
})
export class AnimalCategoryModule {}
