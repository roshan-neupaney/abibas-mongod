-- CreateTable
CREATE TABLE "Videos" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "video_name" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Videos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Videos" ADD CONSTRAINT "Videos_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "myUsers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
