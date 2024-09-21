-- DropForeignKey
ALTER TABLE "Variation" DROP CONSTRAINT "Variation_shoe_id_fkey";

-- AddForeignKey
ALTER TABLE "Variation" ADD CONSTRAINT "Variation_shoe_id_fkey" FOREIGN KEY ("shoe_id") REFERENCES "Shoe"("id") ON DELETE CASCADE ON UPDATE CASCADE;
