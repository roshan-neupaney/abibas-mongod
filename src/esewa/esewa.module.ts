import { Module } from '@nestjs/common';
import { EsewaService } from './esewa.service';
import { EsewaController } from './esewa.controller';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaymentService } from './payment.service';

@Module({
  controllers: [EsewaController],
  providers: [EsewaService, ConfigService, PrismaService, PaymentService],
})
export class EsewaModule {}
