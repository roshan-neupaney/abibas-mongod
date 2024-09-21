/*
  Warnings:

  - You are about to drop the `Animal` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AnimalCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Videos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Animal" DROP CONSTRAINT "Animal_animal_category_id_fkey";

-- DropForeignKey
ALTER TABLE "Videos" DROP CONSTRAINT "Videos_user_id_fkey";

-- DropTable
DROP TABLE "Animal";

-- DropTable
DROP TABLE "AnimalCategory";

-- DropTable
DROP TABLE "Videos";

-- CreateTable
CREATE TABLE "Color" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "color_code" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'PENDING',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Color_pkey" PRIMARY KEY ("id")
);
