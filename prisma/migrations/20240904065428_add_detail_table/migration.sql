/*
  Warnings:

  - You are about to drop the column `details` on the `Shoe` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Shoe" DROP COLUMN "details";

-- CreateTable
CREATE TABLE "ShoeDetail" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "shoe_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShoeDetail_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ShoeDetail" ADD CONSTRAINT "ShoeDetail_shoe_id_fkey" FOREIGN KEY ("shoe_id") REFERENCES "Shoe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
