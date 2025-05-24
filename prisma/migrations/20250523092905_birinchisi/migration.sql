/*
  Warnings:

  - The primary key for the `Capacity` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name_en` on the `Capacity` table. All the data in the column will be lost.
  - You are about to drop the column `name_ru` on the `Capacity` table. All the data in the column will be lost.
  - You are about to drop the column `name_uz` on the `Capacity` table. All the data in the column will be lost.
  - The primary key for the `Contact` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `adress` on the `Contact` table. All the data in the column will be lost.
  - The primary key for the `FAQ` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `GeneralInfo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Level` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name_en` on the `Level` table. All the data in the column will be lost.
  - You are about to drop the column `name_ru` on the `Level` table. All the data in the column will be lost.
  - You are about to drop the column `name_uz` on the `Level` table. All the data in the column will be lost.
  - The primary key for the `Master` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `fullName` on the `Master` table. All the data in the column will be lost.
  - You are about to drop the column `job` on the `Master` table. All the data in the column will be lost.
  - You are about to drop the column `level_id` on the `Master` table. All the data in the column will be lost.
  - You are about to drop the column `price_daily` on the `Master` table. All the data in the column will be lost.
  - You are about to drop the column `price_hourly` on the `Master` table. All the data in the column will be lost.
  - You are about to drop the column `tools` on the `Master` table. All the data in the column will be lost.
  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `level_id` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `minWorkingPrice` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `name_en` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `name_ru` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `name_uz` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `price_daily` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `price_hourly` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `tools` on the `Product` table. All the data in the column will be lost.
  - The primary key for the `Region` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name_en` on the `Region` table. All the data in the column will be lost.
  - You are about to drop the column `name_ru` on the `Region` table. All the data in the column will be lost.
  - You are about to drop the column `name_uz` on the `Region` table. All the data in the column will be lost.
  - The primary key for the `Session` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_id` on the `Session` table. All the data in the column will be lost.
  - The primary key for the `Showcase` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name_en` on the `Showcase` table. All the data in the column will be lost.
  - You are about to drop the column `name_ru` on the `Showcase` table. All the data in the column will be lost.
  - You are about to drop the column `name_uz` on the `Showcase` table. All the data in the column will be lost.
  - The primary key for the `Size` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name_en` on the `Size` table. All the data in the column will be lost.
  - You are about to drop the column `name_ru` on the `Size` table. All the data in the column will be lost.
  - You are about to drop the column `name_uz` on the `Size` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `FullName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Partners` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Capacity` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone]` on the table `Contact` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `GeneralInfo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Level` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone]` on the table `Master` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Region` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ipAddress]` on the table `Session` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Showcase` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Size` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[password]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phoneNumber]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Capacity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minWorkingHours` to the `Level` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Level` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceDaily` to the `Level` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceHourly` to the `Level` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Master` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passportImage` to the `Master` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceDaily` to the `Master` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceHourly` to the `Master` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `year` on the `Master` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `star` on table `Master` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `minWorkingHours` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceDaily` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceHourly` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Region` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deviceInfo` to the `Session` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ipAddress` to the `Session` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Session` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Showcase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Showcase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Size` table without a default value. This is not possible if the table is not empty.
  - Added the required column `district` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `User` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `role` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "RoleStatus" AS ENUM ('ADMIN', 'USER_FIZ', 'USER_YUR', 'SUPER_ADMIN', 'VIEWER_ADMIN');

-- CreateEnum
CREATE TYPE "paymentType" AS ENUM ('CASH', 'CARD');

-- CreateEnum
CREATE TYPE "measure" AS ENUM ('HOUR', 'DAY');

-- CreateEnum
CREATE TYPE "statusType" AS ENUM ('PENDING', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED');

-- DropForeignKey
ALTER TABLE "Master" DROP CONSTRAINT "Master_level_id_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_level_id_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_user_id_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_region_id_fkey";

-- DropIndex
DROP INDEX "Region_name_en_key";

-- DropIndex
DROP INDEX "Region_name_ru_key";

-- DropIndex
DROP INDEX "Region_name_uz_key";

-- DropIndex
DROP INDEX "Session_user_id_idx";

-- DropIndex
DROP INDEX "User_phone_key";

-- AlterTable
ALTER TABLE "Capacity" DROP CONSTRAINT "Capacity_pkey",
DROP COLUMN "name_en",
DROP COLUMN "name_ru",
DROP COLUMN "name_uz",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Capacity_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Capacity_id_seq";

-- AlterTable
ALTER TABLE "Contact" DROP CONSTRAINT "Contact_pkey",
DROP COLUMN "adress",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Contact_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Contact_id_seq";

-- AlterTable
ALTER TABLE "FAQ" DROP CONSTRAINT "FAQ_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "FAQ_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "FAQ_id_seq";

-- AlterTable
ALTER TABLE "GeneralInfo" DROP CONSTRAINT "GeneralInfo_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "GeneralInfo_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "GeneralInfo_id_seq";

-- AlterTable
ALTER TABLE "Level" DROP CONSTRAINT "Level_pkey",
DROP COLUMN "name_en",
DROP COLUMN "name_ru",
DROP COLUMN "name_uz",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "minWorkingHours" INTEGER NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "priceDaily" INTEGER NOT NULL,
ADD COLUMN     "priceHourly" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Level_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Level_id_seq";

-- AlterTable
ALTER TABLE "Master" DROP CONSTRAINT "Master_pkey",
DROP COLUMN "fullName",
DROP COLUMN "job",
DROP COLUMN "level_id",
DROP COLUMN "price_daily",
DROP COLUMN "price_hourly",
DROP COLUMN "tools",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "passportImage" TEXT NOT NULL,
ADD COLUMN     "priceDaily" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "priceHourly" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "isActive" SET DEFAULT true,
DROP COLUMN "year",
ADD COLUMN     "year" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "star" SET NOT NULL,
ALTER COLUMN "star" SET DEFAULT 0,
ADD CONSTRAINT "Master_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Master_id_seq";

-- AlterTable
ALTER TABLE "Product" DROP CONSTRAINT "Product_pkey",
DROP COLUMN "level_id",
DROP COLUMN "minWorkingPrice",
DROP COLUMN "name_en",
DROP COLUMN "name_ru",
DROP COLUMN "name_uz",
DROP COLUMN "price_daily",
DROP COLUMN "price_hourly",
DROP COLUMN "tools",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "minWorkingHours" INTEGER NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "priceDaily" INTEGER NOT NULL,
ADD COLUMN     "priceHourly" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Product_id_seq";

-- AlterTable
ALTER TABLE "Region" DROP CONSTRAINT "Region_pkey",
DROP COLUMN "name_en",
DROP COLUMN "name_ru",
DROP COLUMN "name_uz",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Region_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Region_id_seq";

-- AlterTable
ALTER TABLE "Session" DROP CONSTRAINT "Session_pkey",
DROP COLUMN "user_id",
ADD COLUMN     "deviceInfo" TEXT NOT NULL,
ADD COLUMN     "ipAddress" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Session_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Session_id_seq";

-- AlterTable
ALTER TABLE "Showcase" DROP CONSTRAINT "Showcase_pkey",
DROP COLUMN "name_en",
DROP COLUMN "name_ru",
DROP COLUMN "name_uz",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Showcase_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Showcase_id_seq";

-- AlterTable
ALTER TABLE "Size" DROP CONSTRAINT "Size_pkey",
DROP COLUMN "name_en",
DROP COLUMN "name_ru",
DROP COLUMN "name_uz",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Size_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Size_id_seq";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "FullName",
DROP COLUMN "isActive",
DROP COLUMN "phone",
ADD COLUMN     "BankCode" TEXT,
ADD COLUMN     "accountNumber" TEXT,
ADD COLUMN     "activityType" TEXT,
ADD COLUMN     "bankAddress" TEXT,
ADD COLUMN     "bankName" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "district" TEXT NOT NULL,
ADD COLUMN     "isVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "phoneNumber" TEXT NOT NULL,
ADD COLUMN     "taxIdentificationNumber" TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
DROP COLUMN "role",
ADD COLUMN     "role" "RoleStatus" NOT NULL,
ALTER COLUMN "region_id" DROP NOT NULL,
ALTER COLUMN "region_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- DropTable
DROP TABLE "Partners";

-- DropEnum
DROP TYPE "UserRole";

-- CreateTable
CREATE TABLE "Brand" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ToolBrand" (
    "id" TEXT NOT NULL,
    "tool_id" TEXT NOT NULL,
    "brand_id" TEXT NOT NULL,

    CONSTRAINT "ToolBrand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ToolSize" (
    "id" TEXT NOT NULL,
    "tool_id" TEXT NOT NULL,
    "size_id" TEXT NOT NULL,

    CONSTRAINT "ToolSize_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ToolCapacity" (
    "id" TEXT NOT NULL,
    "tool_id" TEXT NOT NULL,
    "capacity_id" TEXT NOT NULL,

    CONSTRAINT "ToolCapacity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tool" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "decription" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tool_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductLevel" (
    "id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "level_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductLevel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "total" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "lat" DOUBLE PRECISION NOT NULL,
    "long" DOUBLE PRECISION NOT NULL,
    "address" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "paymentType" "paymentType" NOT NULL,
    "withDelivery" BOOLEAN NOT NULL,
    "status" "statusType" NOT NULL,
    "commentToDelivery" TEXT,
    "user_id" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "order_id" TEXT,
    "user_id" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ToolProduct" (
    "tool_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,

    CONSTRAINT "ToolProduct_pkey" PRIMARY KEY ("tool_id","product_id")
);

-- CreateTable
CREATE TABLE "MasterLevel" (
    "id" TEXT NOT NULL,
    "master_id" TEXT NOT NULL,
    "levelId" TEXT NOT NULL,

    CONSTRAINT "MasterLevel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MasterProduct" (
    "master_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,

    CONSTRAINT "MasterProduct_pkey" PRIMARY KEY ("master_id","product_id")
);

-- CreateTable
CREATE TABLE "OrderMaster" (
    "id" TEXT NOT NULL,
    "order_id" TEXT NOT NULL,
    "master_id" TEXT NOT NULL,

    CONSTRAINT "OrderMaster_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderTool" (
    "order_id" TEXT NOT NULL,
    "tool_id" TEXT NOT NULL,
    "count" INTEGER NOT NULL,

    CONSTRAINT "OrderTool_pkey" PRIMARY KEY ("order_id","tool_id")
);

-- CreateTable
CREATE TABLE "OrderProductTool" (
    "id" TEXT NOT NULL,
    "order_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "tool_id" TEXT NOT NULL,
    "count" INTEGER NOT NULL,

    CONSTRAINT "OrderProductTool_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderProduct" (
    "order_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "measure" "measure" NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "levelId" TEXT,

    CONSTRAINT "OrderProduct_pkey" PRIMARY KEY ("order_id","product_id")
);

-- CreateTable
CREATE TABLE "Partner" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Partner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MasterStar" (
    "id" TEXT NOT NULL,
    "star" DOUBLE PRECISION NOT NULL,
    "userId" TEXT,
    "master_id" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MasterStar_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Brand_name_key" ON "Brand"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tool_name_key" ON "Tool"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tool_code_key" ON "Tool"("code");

-- CreateIndex
CREATE UNIQUE INDEX "ProductLevel_product_id_level_id_key" ON "ProductLevel"("product_id", "level_id");

-- CreateIndex
CREATE UNIQUE INDEX "Partner_name_key" ON "Partner"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Capacity_name_key" ON "Capacity"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Contact_phone_key" ON "Contact"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "GeneralInfo_email_key" ON "GeneralInfo"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Level_name_key" ON "Level"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Master_phone_key" ON "Master"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Region_name_key" ON "Region"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Session_ipAddress_key" ON "Session"("ipAddress");

-- CreateIndex
CREATE UNIQUE INDEX "Showcase_name_key" ON "Showcase"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Size_name_key" ON "Size"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_password_key" ON "User"("password");

-- CreateIndex
CREATE UNIQUE INDEX "User_phoneNumber_key" ON "User"("phoneNumber");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_region_id_fkey" FOREIGN KEY ("region_id") REFERENCES "Region"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToolBrand" ADD CONSTRAINT "ToolBrand_tool_id_fkey" FOREIGN KEY ("tool_id") REFERENCES "Tool"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToolBrand" ADD CONSTRAINT "ToolBrand_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "Brand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToolSize" ADD CONSTRAINT "ToolSize_tool_id_fkey" FOREIGN KEY ("tool_id") REFERENCES "Tool"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToolSize" ADD CONSTRAINT "ToolSize_size_id_fkey" FOREIGN KEY ("size_id") REFERENCES "Size"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToolCapacity" ADD CONSTRAINT "ToolCapacity_tool_id_fkey" FOREIGN KEY ("tool_id") REFERENCES "Tool"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToolCapacity" ADD CONSTRAINT "ToolCapacity_capacity_id_fkey" FOREIGN KEY ("capacity_id") REFERENCES "Capacity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductLevel" ADD CONSTRAINT "ProductLevel_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductLevel" ADD CONSTRAINT "ProductLevel_level_id_fkey" FOREIGN KEY ("level_id") REFERENCES "Level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToolProduct" ADD CONSTRAINT "ToolProduct_tool_id_fkey" FOREIGN KEY ("tool_id") REFERENCES "Tool"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToolProduct" ADD CONSTRAINT "ToolProduct_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MasterLevel" ADD CONSTRAINT "MasterLevel_master_id_fkey" FOREIGN KEY ("master_id") REFERENCES "Master"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MasterLevel" ADD CONSTRAINT "MasterLevel_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Level"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MasterProduct" ADD CONSTRAINT "MasterProduct_master_id_fkey" FOREIGN KEY ("master_id") REFERENCES "Master"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MasterProduct" ADD CONSTRAINT "MasterProduct_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderMaster" ADD CONSTRAINT "OrderMaster_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderMaster" ADD CONSTRAINT "OrderMaster_master_id_fkey" FOREIGN KEY ("master_id") REFERENCES "Master"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderTool" ADD CONSTRAINT "OrderTool_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderTool" ADD CONSTRAINT "OrderTool_tool_id_fkey" FOREIGN KEY ("tool_id") REFERENCES "Tool"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderProductTool" ADD CONSTRAINT "OrderProductTool_order_id_product_id_fkey" FOREIGN KEY ("order_id", "product_id") REFERENCES "OrderProduct"("order_id", "product_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderProductTool" ADD CONSTRAINT "OrderProductTool_tool_id_fkey" FOREIGN KEY ("tool_id") REFERENCES "Tool"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderProduct" ADD CONSTRAINT "OrderProduct_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderProduct" ADD CONSTRAINT "OrderProduct_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderProduct" ADD CONSTRAINT "OrderProduct_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Level"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MasterStar" ADD CONSTRAINT "MasterStar_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MasterStar" ADD CONSTRAINT "MasterStar_master_id_fkey" FOREIGN KEY ("master_id") REFERENCES "Master"("id") ON DELETE SET NULL ON UPDATE CASCADE;
