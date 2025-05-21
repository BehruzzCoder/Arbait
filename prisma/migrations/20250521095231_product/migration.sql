-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name_uz" TEXT NOT NULL,
    "name_ru" TEXT NOT NULL,
    "name_en" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "image" TEXT NOT NULL,
    "minWorkingPrice" INTEGER NOT NULL,
    "levels" INTEGER NOT NULL,
    "price_hourly" INTEGER NOT NULL,
    "price_daily" INTEGER NOT NULL,
    "tools" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
