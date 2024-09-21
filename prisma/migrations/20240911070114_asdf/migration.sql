-- AlterTable
ALTER TABLE "ColorVariation" ADD COLUMN     "color" TEXT[] DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "colorArray" DROP DEFAULT;
