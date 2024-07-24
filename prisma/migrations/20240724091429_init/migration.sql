/*
  Warnings:

  - You are about to drop the column `image_path` on the `Animal` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Animal" DROP COLUMN "image_path",
ADD COLUMN     "image_name" TEXT;
