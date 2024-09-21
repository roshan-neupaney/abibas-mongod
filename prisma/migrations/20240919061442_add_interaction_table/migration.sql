-- CreateTable
CREATE TABLE "Interaction" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "shoe_id" TEXT NOT NULL,
    "action_type" TEXT NOT NULL,
    "interaction_score" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Interaction_pkey" PRIMARY KEY ("id")
);
