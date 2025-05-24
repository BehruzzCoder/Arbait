/*
  Warnings:

  - Added the required column `code` to the `OrderTool` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderTool" ADD COLUMN     "code" INTEGER NOT NULL;
