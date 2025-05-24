/*
  Warnings:

  - The primary key for the `Brand` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Brand` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Capacity` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Capacity` table. All the data in the column will be lost.
  - The `id` column on the `Capacity` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Comment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Comment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `order_id` column on the `Comment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `user_id` column on the `Comment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Contact` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `address` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Contact` table. All the data in the column will be lost.
  - The `id` column on the `Contact` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `FAQ` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `FAQ` table. All the data in the column will be lost.
  - The `id` column on the `FAQ` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `GeneralInfo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `GeneralInfo` table. All the data in the column will be lost.
  - The `id` column on the `GeneralInfo` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Level` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Level` table. All the data in the column will be lost.
  - You are about to drop the column `minWorkingHours` on the `Level` table. All the data in the column will be lost.
  - You are about to drop the column `priceDaily` on the `Level` table. All the data in the column will be lost.
  - You are about to drop the column `priceHourly` on the `Level` table. All the data in the column will be lost.
  - The `id` column on the `Level` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Master` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Master` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Master` table. All the data in the column will be lost.
  - You are about to drop the column `passportImage` on the `Master` table. All the data in the column will be lost.
  - You are about to drop the column `priceDaily` on the `Master` table. All the data in the column will be lost.
  - You are about to drop the column `priceHourly` on the `Master` table. All the data in the column will be lost.
  - The `id` column on the `Master` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `MasterLevel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `levelId` on the `MasterLevel` table. All the data in the column will be lost.
  - The `id` column on the `MasterLevel` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `MasterProduct` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `MasterStar` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `MasterStar` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `userId` column on the `MasterStar` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `master_id` column on the `MasterStar` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Order` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Order` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `user_id` column on the `Order` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `OrderMaster` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `OrderMaster` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `OrderProduct` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `levelId` column on the `OrderProduct` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `OrderProductTool` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `OrderProductTool` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `OrderTool` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `minWorkingHours` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `priceDaily` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `priceHourly` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Product` table. All the data in the column will be lost.
  - The `id` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `ProductLevel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `ProductLevel` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Region` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Region` table. All the data in the column will be lost.
  - The `id` column on the `Region` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Session` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `deviceInfo` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `ipAddress` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Session` table. All the data in the column will be lost.
  - The `id` column on the `Session` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Showcase` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Showcase` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Showcase` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Showcase` table. All the data in the column will be lost.
  - The `id` column on the `Showcase` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Size` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Size` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Size` table. All the data in the column will be lost.
  - The `id` column on the `Size` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Tool` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `decription` on the `Tool` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Tool` table. All the data in the column will be lost.
  - The `id` column on the `Tool` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `ToolBrand` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `ToolBrand` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `ToolCapacity` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `ToolCapacity` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `ToolProduct` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ToolSize` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `ToolSize` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `BankCode` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `accountNumber` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `activityType` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `bankAddress` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `bankName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `district` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isVerified` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `taxIdentificationNumber` on the `User` table. All the data in the column will be lost.
  - The `id` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `role` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Partner` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[phone]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `adress` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `Master` table without a default value. This is not possible if the table is not empty.
  - Added the required column `job` to the `Master` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level_id` to the `Master` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price_daily` to the `Master` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price_hourly` to the `Master` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tools` to the `Master` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `year` on the `Master` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `level_id` to the `MasterLevel` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `master_id` on the `MasterLevel` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `master_id` on the `MasterProduct` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `product_id` on the `MasterProduct` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `status` on the `Order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `order_id` on the `OrderMaster` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `master_id` on the `OrderMaster` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `order_id` on the `OrderProduct` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `product_id` on the `OrderProduct` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `measure` on the `OrderProduct` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `order_id` on the `OrderProductTool` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `product_id` on the `OrderProductTool` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `tool_id` on the `OrderProductTool` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `order_id` on the `OrderTool` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `tool_id` on the `OrderTool` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `level_id` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minWorkingPrice` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price_daily` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price_hourly` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `product_id` on the `ProductLevel` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `level_id` on the `ProductLevel` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `user_id` to the `Session` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_uz` to the `Showcase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_` to the `Size` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Tool` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qauntity` to the `Tool` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `code` on the `Tool` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `tool_id` on the `ToolBrand` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `brand_id` on the `ToolBrand` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `tool_id` on the `ToolCapacity` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `capacity_id` on the `ToolCapacity` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `tool_id` on the `ToolProduct` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `product_id` on the `ToolProduct` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `tool_id` on the `ToolSize` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `size_id` on the `ToolSize` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `FullName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `region_id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'SUPER_ADMIN', 'VIEWER_ADMIN', 'USER_FIZ', 'USER_YUR');

-- CreateEnum
CREATE TYPE "intervalType" AS ENUM ('HOUR', 'DAY');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'PROCESSING', 'DELIVERED');

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_order_id_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_user_id_fkey";

-- DropForeignKey
ALTER TABLE "MasterLevel" DROP CONSTRAINT "MasterLevel_levelId_fkey";

-- DropForeignKey
ALTER TABLE "MasterLevel" DROP CONSTRAINT "MasterLevel_master_id_fkey";

-- DropForeignKey
ALTER TABLE "MasterProduct" DROP CONSTRAINT "MasterProduct_master_id_fkey";

-- DropForeignKey
ALTER TABLE "MasterProduct" DROP CONSTRAINT "MasterProduct_product_id_fkey";

-- DropForeignKey
ALTER TABLE "MasterStar" DROP CONSTRAINT "MasterStar_master_id_fkey";

-- DropForeignKey
ALTER TABLE "MasterStar" DROP CONSTRAINT "MasterStar_userId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_user_id_fkey";

-- DropForeignKey
ALTER TABLE "OrderMaster" DROP CONSTRAINT "OrderMaster_master_id_fkey";

-- DropForeignKey
ALTER TABLE "OrderMaster" DROP CONSTRAINT "OrderMaster_order_id_fkey";

-- DropForeignKey
ALTER TABLE "OrderProduct" DROP CONSTRAINT "OrderProduct_levelId_fkey";

-- DropForeignKey
ALTER TABLE "OrderProduct" DROP CONSTRAINT "OrderProduct_order_id_fkey";

-- DropForeignKey
ALTER TABLE "OrderProduct" DROP CONSTRAINT "OrderProduct_product_id_fkey";

-- DropForeignKey
ALTER TABLE "OrderProductTool" DROP CONSTRAINT "OrderProductTool_order_id_product_id_fkey";

-- DropForeignKey
ALTER TABLE "OrderProductTool" DROP CONSTRAINT "OrderProductTool_tool_id_fkey";

-- DropForeignKey
ALTER TABLE "OrderTool" DROP CONSTRAINT "OrderTool_order_id_fkey";

-- DropForeignKey
ALTER TABLE "OrderTool" DROP CONSTRAINT "OrderTool_tool_id_fkey";

-- DropForeignKey
ALTER TABLE "ProductLevel" DROP CONSTRAINT "ProductLevel_level_id_fkey";

-- DropForeignKey
ALTER TABLE "ProductLevel" DROP CONSTRAINT "ProductLevel_product_id_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- DropForeignKey
ALTER TABLE "ToolBrand" DROP CONSTRAINT "ToolBrand_brand_id_fkey";

-- DropForeignKey
ALTER TABLE "ToolBrand" DROP CONSTRAINT "ToolBrand_tool_id_fkey";

-- DropForeignKey
ALTER TABLE "ToolCapacity" DROP CONSTRAINT "ToolCapacity_capacity_id_fkey";

-- DropForeignKey
ALTER TABLE "ToolCapacity" DROP CONSTRAINT "ToolCapacity_tool_id_fkey";

-- DropForeignKey
ALTER TABLE "ToolProduct" DROP CONSTRAINT "ToolProduct_product_id_fkey";

-- DropForeignKey
ALTER TABLE "ToolProduct" DROP CONSTRAINT "ToolProduct_tool_id_fkey";

-- DropForeignKey
ALTER TABLE "ToolSize" DROP CONSTRAINT "ToolSize_size_id_fkey";

-- DropForeignKey
ALTER TABLE "ToolSize" DROP CONSTRAINT "ToolSize_tool_id_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_region_id_fkey";

-- DropIndex
DROP INDEX "Brand_name_key";

-- DropIndex
DROP INDEX "Capacity_name_key";

-- DropIndex
DROP INDEX "Contact_phone_key";

-- DropIndex
DROP INDEX "GeneralInfo_email_key";

-- DropIndex
DROP INDEX "Level_name_key";

-- DropIndex
DROP INDEX "Master_phone_key";

-- DropIndex
DROP INDEX "Product_name_key";

-- DropIndex
DROP INDEX "Session_ipAddress_key";

-- DropIndex
DROP INDEX "Showcase_name_key";

-- DropIndex
DROP INDEX "Size_name_key";

-- DropIndex
DROP INDEX "Tool_name_key";

-- DropIndex
DROP INDEX "User_password_key";

-- DropIndex
DROP INDEX "User_phoneNumber_key";

-- AlterTable
ALTER TABLE "Brand" DROP CONSTRAINT "Brand_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Brand_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Capacity" DROP CONSTRAINT "Capacity_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Capacity_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "order_id",
ADD COLUMN     "order_id" INTEGER,
DROP COLUMN "user_id",
ADD COLUMN     "user_id" INTEGER,
ADD CONSTRAINT "Comment_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Contact" DROP CONSTRAINT "Contact_pkey",
DROP COLUMN "address",
DROP COLUMN "createdAt",
ADD COLUMN     "adress" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Contact_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "FAQ" DROP CONSTRAINT "FAQ_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "FAQ_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "GeneralInfo" DROP CONSTRAINT "GeneralInfo_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "GeneralInfo_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Level" DROP CONSTRAINT "Level_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "minWorkingHours",
DROP COLUMN "priceDaily",
DROP COLUMN "priceHourly",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Level_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Master" DROP CONSTRAINT "Master_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "name",
DROP COLUMN "passportImage",
DROP COLUMN "priceDaily",
DROP COLUMN "priceHourly",
ADD COLUMN     "fullName" TEXT NOT NULL,
ADD COLUMN     "job" TEXT NOT NULL,
ADD COLUMN     "level_id" INTEGER NOT NULL,
ADD COLUMN     "price_daily" INTEGER NOT NULL,
ADD COLUMN     "price_hourly" INTEGER NOT NULL,
ADD COLUMN     "tools" BOOLEAN NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "isActive" DROP DEFAULT,
ALTER COLUMN "star" DROP NOT NULL,
ALTER COLUMN "star" SET DEFAULT 0.5,
DROP COLUMN "year",
ADD COLUMN     "year" INTEGER NOT NULL,
ADD CONSTRAINT "Master_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "MasterLevel" DROP CONSTRAINT "MasterLevel_pkey",
DROP COLUMN "levelId",
ADD COLUMN     "level_id" INTEGER NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "master_id",
ADD COLUMN     "master_id" INTEGER NOT NULL,
ADD CONSTRAINT "MasterLevel_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "MasterProduct" DROP CONSTRAINT "MasterProduct_pkey",
DROP COLUMN "master_id",
ADD COLUMN     "master_id" INTEGER NOT NULL,
DROP COLUMN "product_id",
ADD COLUMN     "product_id" INTEGER NOT NULL,
ADD CONSTRAINT "MasterProduct_pkey" PRIMARY KEY ("master_id", "product_id");

-- AlterTable
ALTER TABLE "MasterStar" DROP CONSTRAINT "MasterStar_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER,
DROP COLUMN "master_id",
ADD COLUMN     "master_id" INTEGER,
ADD CONSTRAINT "MasterStar_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Order" DROP CONSTRAINT "Order_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "OrderStatus" NOT NULL,
DROP COLUMN "user_id",
ADD COLUMN     "user_id" INTEGER,
ADD CONSTRAINT "Order_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "OrderMaster" DROP CONSTRAINT "OrderMaster_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "order_id",
ADD COLUMN     "order_id" INTEGER NOT NULL,
DROP COLUMN "master_id",
ADD COLUMN     "master_id" INTEGER NOT NULL,
ADD CONSTRAINT "OrderMaster_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "OrderProduct" DROP CONSTRAINT "OrderProduct_pkey",
DROP COLUMN "order_id",
ADD COLUMN     "order_id" INTEGER NOT NULL,
DROP COLUMN "product_id",
ADD COLUMN     "product_id" INTEGER NOT NULL,
DROP COLUMN "measure",
ADD COLUMN     "measure" "intervalType" NOT NULL,
DROP COLUMN "levelId",
ADD COLUMN     "levelId" INTEGER,
ADD CONSTRAINT "OrderProduct_pkey" PRIMARY KEY ("order_id", "product_id");

-- AlterTable
ALTER TABLE "OrderProductTool" DROP CONSTRAINT "OrderProductTool_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "order_id",
ADD COLUMN     "order_id" INTEGER NOT NULL,
DROP COLUMN "product_id",
ADD COLUMN     "product_id" INTEGER NOT NULL,
DROP COLUMN "tool_id",
ADD COLUMN     "tool_id" INTEGER NOT NULL,
ADD CONSTRAINT "OrderProductTool_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "OrderTool" DROP CONSTRAINT "OrderTool_pkey",
DROP COLUMN "order_id",
ADD COLUMN     "order_id" INTEGER NOT NULL,
DROP COLUMN "tool_id",
ADD COLUMN     "tool_id" INTEGER NOT NULL,
ADD CONSTRAINT "OrderTool_pkey" PRIMARY KEY ("order_id", "tool_id");

-- AlterTable
ALTER TABLE "Product" DROP CONSTRAINT "Product_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "minWorkingHours",
DROP COLUMN "priceDaily",
DROP COLUMN "priceHourly",
DROP COLUMN "quantity",
ADD COLUMN     "level_id" INTEGER NOT NULL,
ADD COLUMN     "minWorkingPrice" INTEGER NOT NULL,
ADD COLUMN     "price_daily" INTEGER NOT NULL,
ADD COLUMN     "price_hourly" INTEGER NOT NULL,
ADD COLUMN     "tools" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ProductLevel" DROP CONSTRAINT "ProductLevel_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "product_id",
ADD COLUMN     "product_id" INTEGER NOT NULL,
DROP COLUMN "level_id",
ADD COLUMN     "level_id" INTEGER NOT NULL,
ADD CONSTRAINT "ProductLevel_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Region" DROP CONSTRAINT "Region_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Region_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Session" DROP CONSTRAINT "Session_pkey",
DROP COLUMN "deviceInfo",
DROP COLUMN "ipAddress",
DROP COLUMN "userId",
ADD COLUMN     "user_id" INTEGER NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Session_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Showcase" DROP CONSTRAINT "Showcase_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "description",
DROP COLUMN "name",
ADD COLUMN     "name_en" TEXT,
ADD COLUMN     "name_ru" TEXT,
ADD COLUMN     "name_uz" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Showcase_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Size" DROP CONSTRAINT "Size_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "name",
ADD COLUMN     "name_" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Size_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Tool" DROP CONSTRAINT "Tool_pkey",
DROP COLUMN "decription",
DROP COLUMN "quantity",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "qauntity" INTEGER NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "code",
ADD COLUMN     "code" INTEGER NOT NULL,
ADD CONSTRAINT "Tool_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ToolBrand" DROP CONSTRAINT "ToolBrand_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "tool_id",
ADD COLUMN     "tool_id" INTEGER NOT NULL,
DROP COLUMN "brand_id",
ADD COLUMN     "brand_id" INTEGER NOT NULL,
ADD CONSTRAINT "ToolBrand_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ToolCapacity" DROP CONSTRAINT "ToolCapacity_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "tool_id",
ADD COLUMN     "tool_id" INTEGER NOT NULL,
DROP COLUMN "capacity_id",
ADD COLUMN     "capacity_id" INTEGER NOT NULL,
ADD CONSTRAINT "ToolCapacity_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ToolProduct" DROP CONSTRAINT "ToolProduct_pkey",
DROP COLUMN "tool_id",
ADD COLUMN     "tool_id" INTEGER NOT NULL,
DROP COLUMN "product_id",
ADD COLUMN     "product_id" INTEGER NOT NULL,
ADD CONSTRAINT "ToolProduct_pkey" PRIMARY KEY ("tool_id", "product_id");

-- AlterTable
ALTER TABLE "ToolSize" DROP CONSTRAINT "ToolSize_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "tool_id",
ADD COLUMN     "tool_id" INTEGER NOT NULL,
DROP COLUMN "size_id",
ADD COLUMN     "size_id" INTEGER NOT NULL,
ADD CONSTRAINT "ToolSize_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "BankCode",
DROP COLUMN "accountNumber",
DROP COLUMN "activityType",
DROP COLUMN "bankAddress",
DROP COLUMN "bankName",
DROP COLUMN "createdAt",
DROP COLUMN "district",
DROP COLUMN "isVerified",
DROP COLUMN "name",
DROP COLUMN "phoneNumber",
DROP COLUMN "taxIdentificationNumber",
ADD COLUMN     "FullName" TEXT NOT NULL,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "phone" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "region_id",
ADD COLUMN     "region_id" INTEGER NOT NULL,
DROP COLUMN "role",
ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'USER_FIZ',
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Partner";

-- DropEnum
DROP TYPE "RoleStatus";

-- DropEnum
DROP TYPE "measure";

-- DropEnum
DROP TYPE "statusType";

-- CreateTable
CREATE TABLE "Partners" (
    "id" SERIAL NOT NULL,
    "name_uz" TEXT NOT NULL,
    "name_ru" TEXT,
    "name_en" TEXT,
    "image" TEXT NOT NULL,

    CONSTRAINT "Partners_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductLevel_product_id_level_id_key" ON "ProductLevel"("product_id", "level_id");

-- CreateIndex
CREATE INDEX "Session_user_id_idx" ON "Session"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Tool_code_key" ON "Tool"("code");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_region_id_fkey" FOREIGN KEY ("region_id") REFERENCES "Region"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_level_id_fkey" FOREIGN KEY ("level_id") REFERENCES "Level"("id") ON DELETE CASCADE ON UPDATE CASCADE;

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
ALTER TABLE "Master" ADD CONSTRAINT "Master_level_id_fkey" FOREIGN KEY ("level_id") REFERENCES "Level"("id") ON DELETE CASCADE ON UPDATE CASCADE;

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
ALTER TABLE "MasterLevel" ADD CONSTRAINT "MasterLevel_level_id_fkey" FOREIGN KEY ("level_id") REFERENCES "Level"("id") ON DELETE CASCADE ON UPDATE CASCADE;

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

-- AddForeignKey
ALTER TABLE "ProductLevel" ADD CONSTRAINT "ProductLevel_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductLevel" ADD CONSTRAINT "ProductLevel_level_id_fkey" FOREIGN KEY ("level_id") REFERENCES "Level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
