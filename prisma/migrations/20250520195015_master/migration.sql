-- CreateTable
CREATE TABLE "Master" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "year" INTEGER NOT NULL,
    "job" TEXT NOT NULL,
    "minWorkingHours" INTEGER NOT NULL,
    "level_id" INTEGER NOT NULL,
    "price_hourly" INTEGER NOT NULL,
    "price_daily" INTEGER NOT NULL,
    "experience" INTEGER NOT NULL,
    "tools" BOOLEAN NOT NULL,
    "image" TEXT NOT NULL,
    "star" DOUBLE PRECISION NOT NULL,
    "about" TEXT NOT NULL,

    CONSTRAINT "Master_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Master" ADD CONSTRAINT "Master_level_id_fkey" FOREIGN KEY ("level_id") REFERENCES "Level"("id") ON DELETE CASCADE ON UPDATE CASCADE;
