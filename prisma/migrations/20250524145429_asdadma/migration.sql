-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "status" DROP NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'PENDING';
