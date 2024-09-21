-- AddForeignKey
ALTER TABLE "Interaction" ADD CONSTRAINT "Interaction_shoe_id_fkey" FOREIGN KEY ("shoe_id") REFERENCES "Shoe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interaction" ADD CONSTRAINT "Interaction_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "myUsers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
