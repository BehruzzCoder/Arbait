/*
  Warnings:

  - The primary key for the `OrderTool` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[order_id,tool_id]` on the table `OrderTool` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "OrderTool" DROP CONSTRAINT "OrderTool_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "OrderTool_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "OrderTool_order_id_tool_id_key" ON "OrderTool"("order_id", "tool_id");
