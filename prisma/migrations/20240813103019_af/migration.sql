/*
  Warnings:

  - You are about to drop the column `size` on the `Shoe` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Shoe" DROP COLUMN "size";

-- AlterTable
ALTER TABLE "Size" ALTER COLUMN "shoe_id" DROP DEFAULT,
ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Variation" ALTER COLUMN "size_id" DROP DEFAULT,
ALTER COLUMN "updatedAt" DROP DEFAULT;
