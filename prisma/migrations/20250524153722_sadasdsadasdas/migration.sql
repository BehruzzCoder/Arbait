/*
  Warnings:

  - You are about to drop the column `levelId` on the `OrderProduct` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "OrderProduct" DROP CONSTRAINT "OrderProduct_levelId_fkey";

-- AlterTable
ALTER TABLE "OrderProduct" DROP COLUMN "levelId",
ADD COLUMN     "level_id" INTEGER;

-- AddForeignKey
ALTER TABLE "OrderProduct" ADD CONSTRAINT "OrderProduct_level_id_fkey" FOREIGN KEY ("level_id") REFERENCES "Level"("id") ON DELETE SET NULL ON UPDATE CASCADE;
