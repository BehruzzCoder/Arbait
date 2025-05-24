/*
  Warnings:

  - You are about to drop the column `name_en` on the `Partners` table. All the data in the column will be lost.
  - You are about to drop the column `name_ru` on the `Partners` table. All the data in the column will be lost.
  - You are about to drop the column `name_uz` on the `Partners` table. All the data in the column will be lost.
  - You are about to drop the column `name_en` on the `Showcase` table. All the data in the column will be lost.
  - You are about to drop the column `name_ru` on the `Showcase` table. All the data in the column will be lost.
  - You are about to drop the column `name_uz` on the `Showcase` table. All the data in the column will be lost.
  - You are about to drop the column `name_` on the `Size` table. All the data in the column will be lost.
  - Added the required column `name` to the `Partners` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Showcase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Size` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Partners" DROP COLUMN "name_en",
DROP COLUMN "name_ru",
DROP COLUMN "name_uz",
ADD COLUMN     "craetedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Showcase" DROP COLUMN "name_en",
DROP COLUMN "name_ru",
DROP COLUMN "name_uz",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Size" DROP COLUMN "name_",
ADD COLUMN     "name" TEXT NOT NULL;
