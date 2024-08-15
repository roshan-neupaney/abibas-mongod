/*
  Warnings:

  - Added the required column `color` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cart" ADD COLUMN     "color" TEXT NOT NULL;
