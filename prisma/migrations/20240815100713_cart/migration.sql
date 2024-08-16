/*
  Warnings:

  - You are about to drop the column `color_id` on the `Cart` table. All the data in the column will be lost.
  - Added the required column `color_variation_id` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cart" DROP COLUMN "color_id",
ADD COLUMN     "color_variation_id" TEXT NOT NULL;
