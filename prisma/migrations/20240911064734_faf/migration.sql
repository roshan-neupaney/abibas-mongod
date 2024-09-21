-- AlterTable
ALTER TABLE "ColorVariation" ADD COLUMN     "colorArray" TEXT[] DEFAULT ARRAY[]::TEXT[];
