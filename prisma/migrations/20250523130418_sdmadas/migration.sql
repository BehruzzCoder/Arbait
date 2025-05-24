/*
  Warnings:

  - You are about to drop the column `level_id` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `tools` on the `Product` table. All the data in the column will be lost.
  - Added the required column `quantity` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_level_id_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "level_id",
DROP COLUMN "tools",
ADD COLUMN     "quantity" INTEGER NOT NULL;
