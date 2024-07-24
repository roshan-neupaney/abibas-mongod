import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AnimalService {
  constructor(private prisma: PrismaService){}

  create(createAnimalDto: CreateAnimalDto) {
    return this.prisma.animal.create({
      data: createAnimalDto
    });
  }

  findAll() {
    return this.prisma.animal.findMany({
      include: {
        animalCategory: {
          select: {
            id: true,
            title: true
          }
        }
      }
    });
  }

  findOne(id: string) {
    return this.prisma.animal.findUnique({
      where: {
        id
      }
    });
  }

  update(id: number, updateAnimalDto: UpdateAnimalDto) {
    return `This action updates a #${id} animal`;
  }

  remove(id: number) {
    return `This action removes a #${id} animal`;
  }
}
