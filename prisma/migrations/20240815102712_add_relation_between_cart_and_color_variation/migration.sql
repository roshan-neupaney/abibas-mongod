-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_color_variation_id_fkey" FOREIGN KEY ("color_variation_id") REFERENCES "ColorVariation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
