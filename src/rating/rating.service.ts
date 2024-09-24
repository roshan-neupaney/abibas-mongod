import { Injectable } from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RatingService {
  constructor(private prisma: PrismaService) {}
  async create(createRatingDto: CreateRatingDto) {
    return await this.prisma.rating.create({ data: createRatingDto });
  }

  findAll() {
    return this.prisma.rating.findMany();
  }

  findOne(id: string) {
    return this.prisma.rating.findUnique({ where: { id } });
  }

  update(id: string, updateRatingDto: UpdateRatingDto) {
    return this.prisma.rating.update({ data: updateRatingDto, where: { id } });
  }

  remove(id: string) {
    return this.prisma.rating.delete({ where: { id } });
  }
}
