import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { Role } from '@prisma/client';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    try {
      const hashed = await argon.hash(data.password);
      if (data.id) {
        return await this.prisma.myUsers.update({
          data: {
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            mobile: data.mobile,
            hash: hashed,
            role: Role[data.role],
          },
          where: { id: data.id },
        });
      } else {
        return await this.prisma.myUsers.create({
          data: {
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            mobile: data.mobile,
            hash: hashed,
            role: Role[data.role],
          },
        });
      }
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('The user already exists by this email');
        }
      }
      throw error;
    }
  }

  async findAll() {
    return this.prisma.myUsers.findMany();
  }

  async findOne(id: string) {
    return this.prisma.myUsers.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, data: UpdateUserDto) {
    return this.prisma.myUsers.update({
      data: {
        ...data,
        role: Role[data.role],
      },
      where: {
        id,
      },
    });
  }
  async delete(id: string) {
    return this.prisma.myUsers.delete({
      where: {
        id,
      },
    });
  }
}
