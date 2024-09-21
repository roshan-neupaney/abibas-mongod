/*
  Warnings:

  - You are about to drop the column `color` on the `Shoe` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `Shoe` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Shoe" DROP COLUMN "color",
DROP COLUMN "size";
