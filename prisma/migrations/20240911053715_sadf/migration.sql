/*
  Warnings:

  - Changed the type of `color` on the `ColorVariation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "ColorVariation" DROP COLUMN "color",
ADD COLUMN     "color" JSONB NOT NULL;
