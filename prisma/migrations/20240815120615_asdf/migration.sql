/*
  Warnings:

  - A unique constraint covering the columns `[shoe_id]` on the table `Favorite` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Favorite_shoe_id_key" ON "Favorite"("shoe_id");
