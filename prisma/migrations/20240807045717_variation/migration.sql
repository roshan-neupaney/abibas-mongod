-- CreateTable
CREATE TABLE "Variation" (
    "id" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "shoe_id" TEXT NOT NULL,

    CONSTRAINT "Variation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Variation" ADD CONSTRAINT "Variation_shoe_id_fkey" FOREIGN KEY ("shoe_id") REFERENCES "Shoe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
