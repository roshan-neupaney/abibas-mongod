import { Injectable } from '@nestjs/common';
import { CreateColorDto } from './dto/create-color.dto';
import { UpdateColorDto } from './dto/update-color.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ColorService {
  constructor(private prisma: PrismaService) {}
  create(createColorDto: CreateColorDto) {
    return this.prisma.color.create({ data: createColorDto });
  }

  findAll() {
    return this.prisma.color.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
  findAllActive() {
    return this.prisma.color.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      where: {
        status: 'ACTIVE'
      }
    });
  }

  findOne(id: string) {
    return this.prisma.color.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateColorDto: UpdateColorDto) {
    return this.prisma.color.update({
      data: updateColorDto,
      where: {
        id,
      },
    });
  }

  remove(id: string) {
    return this.prisma.color.delete({ where: { id } });
  }
}
