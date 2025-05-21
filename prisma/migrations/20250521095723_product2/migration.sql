/*
  Warnings:

  - You are about to drop the column `levels` on the `Product` table. All the data in the column will be lost.
  - The `tools` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `level_id` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "levels",
ADD COLUMN     "level_id" INTEGER NOT NULL,
DROP COLUMN "tools",
ADD COLUMN     "tools" BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_level_id_fkey" FOREIGN KEY ("level_id") REFERENCES "Level"("id") ON DELETE CASCADE ON UPDATE CASCADE;
