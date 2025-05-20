-- CreateTable
CREATE TABLE "Capacity" (
    "id" SERIAL NOT NULL,
    "name_uz" TEXT NOT NULL,
    "name_ru" TEXT,
    "name_en" TEXT,

    CONSTRAINT "Capacity_pkey" PRIMARY KEY ("id")
);
