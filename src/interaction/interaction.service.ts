import { Injectable } from '@nestjs/common';
import { CreateInteractionDto } from './dto/create-interaction.dto';
import { UpdateInteractionDto } from './dto/update-interaction.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InteractionService {
  constructor(private prisma: PrismaService){}
  create(createInteractionDto: CreateInteractionDto) {
    return this.prisma.interaction.create({data: createInteractionDto});
  }

  async findAll() {
    const interactions = await this.prisma.interaction.findMany({
      include: {
        shoe: {
          include: {
            brand: true,
            category: true,
          }
        },
        user: true
      }
    });
    const filteredResult = interactions.map((items) => {
      return {
        user_id: items.user_id,
        shoe_id: items.shoe_id,
        shoe_brand: items.shoe.brand.title,
        shoe_price: items.shoe.price,
        shoe_description: items.shoe.description,
        shoe_details: items.shoe.details,
        shoe_category: items.shoe.category.title,
        action_type: items.action_type,
        interaction_score: items.interaction_score
      }
    })
    return filteredResult;
  }

  findOne(id: number) {
    return `This action returns a #${id} interaction`;
  }

  update(id: number, updateInteractionDto: UpdateInteractionDto) {
    return `This action updates a #${id} interaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} interaction`;
  }
}
