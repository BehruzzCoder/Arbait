-- CreateTable
CREATE TABLE "Region" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "name_uz" TEXT NOT NULL,
    "name_ru" TEXT NOT NULL,
    "name_en" TEXT NOT NULL,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Region_name_key" ON "Region"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Region_name_uz_key" ON "Region"("name_uz");

-- CreateIndex
CREATE UNIQUE INDEX "Region_name_ru_key" ON "Region"("name_ru");

-- CreateIndex
CREATE UNIQUE INDEX "Region_name_en_key" ON "Region"("name_en");
