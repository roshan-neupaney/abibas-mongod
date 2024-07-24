import { Injectable } from '@nestjs/common';
import { CreateAnimalCategoryDto } from './dto/create-animal-category.dto';
import { UpdateAnimalCategoryDto } from './dto/update-animal-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AnimalCategoryService {

  constructor(
    private prisma: PrismaService){}

  create(createAnimalCategoryDto: CreateAnimalCategoryDto) {
    return this.prisma.animalCategory.create({
      data: createAnimalCategoryDto
    });
  }

  findAll() {
    return `This action returns all animalCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} animalCategory`;
  }

  update(id: number, updateAnimalCategoryDto: UpdateAnimalCategoryDto) {
    return `This action updates a #${id} animalCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} animalCategory`;
  }
}
