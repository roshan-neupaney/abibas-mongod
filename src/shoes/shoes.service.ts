import { HttpException, Injectable } from '@nestjs/common';
import { CreateShoeDto } from './dto/create-shoe.dto';
import { UpdateShoeDto } from './dto/update-shoe.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ShoesType } from './shoes.types';
import { join } from 'path';
import { unlink } from 'fs';
import { CreateCartDto } from './dto/create-cart.dto';
import { VariationDto } from './dto/create-variation.dto';
import { SizeDto } from './dto/create-size.dto';

@Injectable()
export class ShoesService {
  constructor(private prisma: PrismaService) {}
  async create(createShoeDto: CreateShoeDto, colorVariation: any) {
    try {
      const result = await this.prisma.$transaction(async (prisma) => {
        delete createShoeDto['color_variation'];
        const shoeResponse = await prisma.shoe.create({
          data: {
            title: createShoeDto.title,
            brand: createShoeDto.brand,
            price: createShoeDto.price,
            description: createShoeDto.description,
            category: createShoeDto.category,
            details: createShoeDto.details,
          },
        });

        for (const cv of colorVariation) {
          const cvResponse = await prisma.colorVariation.create({
            data: {
              color: cv.color,
              image_url: cv.image_url,
              shoe_id: shoeResponse.id,
            },
          });
          for (const s of cv.sizes) {
            await prisma.size.create({
              data: {
                size: s.size,
                stock: s.stock,
                color_variation_id: cvResponse.id,
              },
            });
          }
        }
        return shoeResponse;
      });
      return result;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  findAll(query: ShoesType) {
    const { category } = query;
    return this.prisma.shoe.findMany({
      where: {
        category,
      },
      select: {
        id: true,
        title: true,
        brand: true,
        price: true,
        description: true,
        category: true,
        details: true,
        createdAt: true,
        updatedAt: true,
        colorVariation: {
          select: {
            id: true,
            color: true,
            image_url: true,
            createdAt: true,
            sizes: {
              select: {
                id: true,
                size: true,
                stock: true,
              },
            },
          },
        },
        favorite: {
          select: {
            id: true,
            shoe_id: true,
          },
        },
      },
    });
  }

  findOne(id: string) {
    return this.prisma.shoe.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        title: true,
        brand: true,
        price: true,
        description: true,
        category: true,
        details: true,
        createdAt: true,
        updatedAt: true,
        colorVariation: {
          select: {
            id: true,
            color: true,
            image_url: true,
            createdAt: true,
            sizes: {
              select: {
                id: true,
                size: true,
                stock: true,
              },
            },
          },
        },
      },
    });
  }

  async update(id: string, updateShoeDto: UpdateShoeDto, colorVariation: any) {
    delete updateShoeDto['color_variation'];
    const { deleteColorVariation, deleteSize } = updateShoeDto;
    const shoeResponse = await this.prisma.shoe.update({
      where: { id },
      data: {
        title: updateShoeDto.title,
        brand: updateShoeDto.brand,
        price: updateShoeDto.price,
        description: updateShoeDto.description,
        category: updateShoeDto.category,
        details: updateShoeDto.details,
      },
    });
    if (deleteColorVariation?.length > 0) {
      for (const item of deleteColorVariation) {
        await this.prisma.colorVariation.delete({ where: { id: item } });
      }
    }
    if (deleteSize?.length > 0) {
      for (const item of deleteSize) {
        await this.prisma.size.delete({ where: { id: item } });
      }
    }
    const colorVariationResponse = await Promise.all(
      colorVariation.map(async (cv: VariationDto) => {
        if (cv.id) {
          const existingImage = await this.prisma.colorVariation.findUnique({
            where: { id: cv.id },
          });
          if (existingImage && !(existingImage.image_url === cv.image_url)) {
            const existingImagePath = join(
              './public',
              'uploads',
              'images',
              existingImage.image_url,
            );
            unlink(existingImagePath, (error) => {
              if (error) return 'Error while updating shoe';
            });
          }
          const resCV = await this.prisma.colorVariation.update({
            where: {
              id: cv.id,
            },
            data: {
              color: cv.color,
              image_url: cv.image_url,
            },
          });
          const resSize = await Promise.all(
            cv.sizes.map(async (s: SizeDto) => {
              if (s.id) {
                return await this.prisma.size.update({
                  where: {
                    id: s.id,
                  },
                  data: {
                    size: s.size,
                    stock: s.stock,
                  },
                });
              } else {
                return await this.prisma.size.create({
                  data: {
                    size: s.size,
                    stock: s.stock,
                    color_variation_id: resCV.id,
                  },
                });
              }
            }),
          );
          return { ...resCV, sizes: resSize };
        } else {
          const resCV = await this.prisma.colorVariation.create({
            data: {
              color: cv.color,
              image_url: cv.image_url,
              shoe_id: shoeResponse.id,
            },
          });
          const resSize = await Promise.all(
            cv.sizes.map(async (s: SizeDto) => {
              return await this.prisma.size.create({
                data: {
                  size: s.size,
                  stock: s.stock,
                  color_variation_id: resCV.id,
                },
              });
            }),
          );
          return { ...resCV, sizes: resSize };
        }
      }),
    );
    return { ...shoeResponse, colorVariation: colorVariationResponse };
  }

  remove(id: string) {
    return this.prisma.shoe.delete({
      where: {
        id,
      },
    });
  }

  async createCart(createCartDto: CreateCartDto) {
    const existingProduct = await this.prisma.cart.findFirst({
      where: {
        shoe_id: createCartDto.shoe_id,
        size: createCartDto.size,
        color_variation_id: createCartDto.color_variation_id,
      },
    });
    if (existingProduct) {
      return await this.prisma.cart.update({
        data: {
          count: existingProduct.count + 1,
        },
        where: {
          id: existingProduct.id,
        },
      });
    } else {
      return await this.prisma.cart.create({
        data: {
          shoe_id: createCartDto.shoe_id,
          size: createCartDto.size,
          color_variation_id: createCartDto.color_variation_id,
          user_id: createCartDto.user_id,
        },
      });
    }
  }

  async findAllCart(user_id: string) {
    return await this.prisma.cart.findMany({
      where: {
        user_id,
      },
      select: {
        id: true,
        size: true,
        count: true,
        shoe: {
          select: {
            id: true,
            title: true,
          },
        },
        colorVariation: {
          select: {
            id: true,
            color: true,
            image_url: true,
          },
        },
      },
    });
  }

  async deleteCart(id: string) {
    const existingProduct = await this.prisma.cart.findFirst({
      where: { id },
    });
    if (existingProduct.count === 1) {
      return await this.prisma.cart.delete({ where: { id } });
    } else {
      return await this.prisma.cart.update({
        data: { count: existingProduct.count - 1 },
        where: { id: existingProduct.id },
      });
    }
  }

  async createFavorites(shoeId: string, userId: string) {
    const existingFavorite = await this.prisma.favorite.findFirst({
      where: { shoe_id: shoeId },
    });
    if (existingFavorite) {
      return await this.prisma.favorite.delete({
        where: {
          id: existingFavorite.id,
        },
      });
    } else {
      return await this.prisma.favorite.create({
        data: {
          shoe_id: shoeId,
          user_id: userId,
        },
      });
    }
  }
  async findAllFavorites(userId: string) {
    return await this.prisma.favorite.findMany({
      where: {
        user_id: userId,
      },
      select: {
        id: true,
        shoe: true,
      },
    });
  }
}
