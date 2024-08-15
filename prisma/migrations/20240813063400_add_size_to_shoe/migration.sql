/*
  Warnings:

  - The `size` column on the `Shoe` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Shoe" DROP COLUMN "size",
ADD COLUMN     "size" JSONB NOT NULL DEFAULT '[]',
ALTER COLUMN "details" DROP DEFAULT;
