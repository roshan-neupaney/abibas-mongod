/*
  Warnings:

  - You are about to drop the column `size` on the `Variation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Shoe" ADD COLUMN     "size" TEXT NOT NULL DEFAULT 'null';

-- AlterTable
ALTER TABLE "Variation" DROP COLUMN "size";
