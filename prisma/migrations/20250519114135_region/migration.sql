/*
  Warnings:

  - You are about to drop the column `name` on the `Region` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Region_name_key";

-- AlterTable
ALTER TABLE "Region" DROP COLUMN "name";
