-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Shoe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
