/*
  Warnings:

  - You are about to drop the column `color` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `product_id` on the `Cart` table. All the data in the column will be lost.
  - Added the required column `color_id` to the `Cart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shoe_id` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_product_id_fkey";

-- AlterTable
ALTER TABLE "Cart" DROP COLUMN "color",
DROP COLUMN "product_id",
ADD COLUMN     "color_id" TEXT NOT NULL,
ADD COLUMN     "shoe_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_shoe_id_fkey" FOREIGN KEY ("shoe_id") REFERENCES "Shoe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
