/*
  Warnings:

  - You are about to drop the `ShoeDetail` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ShoeDetail" DROP CONSTRAINT "ShoeDetail_shoe_id_fkey";

-- AlterTable
ALTER TABLE "Shoe" ADD COLUMN     "details" TEXT NOT NULL DEFAULT '';

-- DropTable
DROP TABLE "ShoeDetail";
