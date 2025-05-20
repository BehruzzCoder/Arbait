-- CreateTable
CREATE TABLE "Size" (
    "id" SERIAL NOT NULL,
    "name_uz" TEXT NOT NULL,
    "name_ru" TEXT,
    "name_en" TEXT,

    CONSTRAINT "Size_pkey" PRIMARY KEY ("id")
);
