import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PaymentService {
  constructor(private prisma: PrismaService) {}
  async verifyPayment(
    product_code: string,
    total_amount: string,
    transaction_uuid: string,
    orderId: string,
    paymentId: string,
  ) {
    return await this.prisma.$transaction(async (prisma) => {
      const amount = total_amount.replace(',', '');
      const res = await axios.get(
        `https://uat.esewa.com.np/api/epay/transaction/status/?product_code=${product_code}&total_amount=${amount}&transaction_uuid=${transaction_uuid}`,
      );

      if (res.data.status === 'COMPLETE') {
        await prisma.order.update({
            where: { id: orderId },
            data: { status: 'COMPLETED' },
        });
        await prisma.payment.update({
          where: { id: paymentId },
          data: { status: 'SUCCESS' },
        });
      } else {
        await prisma.order.update({
          where: { id: orderId },
          data: { status: 'CANCELLED' },
        });
        await prisma.payment.update({
          where: { id: paymentId },
          data: { status: 'FAILED' },
        });
      }
    });
  }
}
