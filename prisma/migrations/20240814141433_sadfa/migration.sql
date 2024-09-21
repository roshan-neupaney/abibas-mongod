/*
  Warnings:

  - You are about to drop the column `shoe_id` on the `Size` table. All the data in the column will be lost.
  - You are about to drop the `Variation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Size" DROP CONSTRAINT "Size_shoe_id_fkey";

-- DropForeignKey
ALTER TABLE "Variation" DROP CONSTRAINT "Variation_size_id_fkey";

-- AlterTable
ALTER TABLE "Size" DROP COLUMN "shoe_id",
ADD COLUMN     "color_variation_id" TEXT NOT NULL DEFAULT 'null',
ADD COLUMN     "stock" TEXT NOT NULL DEFAULT '1';

-- DropTable
DROP TABLE "Variation";

-- CreateTable
CREATE TABLE "ColorVariation" (
    "id" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "shoe_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ColorVariation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ColorVariation" ADD CONSTRAINT "ColorVariation_shoe_id_fkey" FOREIGN KEY ("shoe_id") REFERENCES "Shoe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Size" ADD CONSTRAINT "Size_color_variation_id_fkey" FOREIGN KEY ("color_variation_id") REFERENCES "ColorVariation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
