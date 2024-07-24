-- CreateTable
CREATE TABLE "AnimalCategory" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "AnimalCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Animal" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "animal_category_id" TEXT NOT NULL,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_animal_category_id_fkey" FOREIGN KEY ("animal_category_id") REFERENCES "AnimalCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
