/*
  Warnings:

  - You are about to drop the column `size` on the `Shoe` table. All the data in the column will be lost.
  - You are about to drop the column `shoe_id` on the `Variation` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Variation" DROP CONSTRAINT "Variation_shoe_id_fkey";

-- AlterTable
ALTER TABLE "Shoe" DROP COLUMN "size";

-- AlterTable
ALTER TABLE "Variation" DROP COLUMN "shoe_id",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "size_id" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "Size" (
    "id" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "shoe_id" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Size_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Size" ADD CONSTRAINT "Size_shoe_id_fkey" FOREIGN KEY ("shoe_id") REFERENCES "Shoe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Variation" ADD CONSTRAINT "Variation_size_id_fkey" FOREIGN KEY ("size_id") REFERENCES "Size"("id") ON DELETE CASCADE ON UPDATE CASCADE;
