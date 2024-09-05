-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'ACTIVE', 'DEACTIVATED');

-- AlterTable
ALTER TABLE "Shoe" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'PENDING';
