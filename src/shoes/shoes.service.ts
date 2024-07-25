import { Injectable } from '@nestjs/common';
import { CreateShoeDto } from './dto/create-shoe.dto';
import { UpdateShoeDto } from './dto/update-shoe.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ShoesType } from './shoes.types';

@Injectable()
export class ShoesService {
  constructor(private prisma: PrismaService){}
  async create(createShoeDto: CreateShoeDto) {
    return await this.prisma.shoe.create({data: createShoeDto});
  }

  findAll(query: ShoesType) {
    const {category} = query;
    return this.prisma.shoe.findMany({
      where: {
        category
      }
    });
  }

  findOne(id: string) {
    return this.prisma.shoe.findUnique({
      where: {
        id
      }
    });
  }

  update(id: string, updateShoeDto: UpdateShoeDto) {
    return this.prisma.shoe.update({
      data: updateShoeDto,
      where: {
        id
      }
    });
  }

  remove(id: string) {
    return this.prisma.shoe.delete({
      where: {
        id
      }
    });
  }
}
