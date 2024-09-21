import { OrderStatus } from "@prisma/client";

export class CreateEsewaDto {
  userId: string;
  totalAmount: string;
  status: OrderStatus;
}
