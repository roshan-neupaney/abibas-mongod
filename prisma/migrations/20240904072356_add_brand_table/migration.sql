/*
  Warnings:

  - You are about to drop the column `brand` on the `Shoe` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Shoe" DROP COLUMN "brand",
ADD COLUMN     "brand_id" TEXT NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE "Brand" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Shoe" ADD CONSTRAINT "Shoe_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
