/*
  Warnings:

  - Added the required column `code` to the `OrderProductTool` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderProductTool" ADD COLUMN     "code" INTEGER NOT NULL;
