/*
  Warnings:

  - You are about to drop the column `category` on the `Shoe` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Shoe" DROP COLUMN "category",
ADD COLUMN     "category_id" TEXT NOT NULL DEFAULT 'null';

-- AddForeignKey
ALTER TABLE "Shoe" ADD CONSTRAINT "Shoe_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
