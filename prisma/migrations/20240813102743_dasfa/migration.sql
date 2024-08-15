/*
  Warnings:

  - Added the required column `size` to the `Shoe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Shoe" ADD COLUMN     "size" JSONB NOT NULL;
