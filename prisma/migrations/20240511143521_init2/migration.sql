/*
  Warnings:

  - You are about to drop the column `jenis` on the `Barang` table. All the data in the column will be lost.
  - Added the required column `jenisBarangId` to the `Barang` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Barang" DROP COLUMN "jenis",
ADD COLUMN     "jenisBarangId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "JenisBarang" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "JenisBarang_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Barang" ADD CONSTRAINT "Barang_jenisBarangId_fkey" FOREIGN KEY ("jenisBarangId") REFERENCES "JenisBarang"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
