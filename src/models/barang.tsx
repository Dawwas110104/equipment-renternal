import { PrismaClient } from '@prisma/client';

interface Barang {
  id: number;
  nama: string;
  jenis: string;
  stok: number;
  dipinjam: boolean;
  tanggalPinjam?: Date;
  tanggalKembali?: Date;
  gambar: string;
}

export const getBarangById = async (id: number) => {
  const prisma = new PrismaClient();
  try {
    const barang = await prisma.barang.findUnique({
      where: { id },
    });
    return barang;
  } catch (error) {
    console.error('Error fetching barang by ID:', error);
    throw new Error('Failed to fetch barang');
  } finally {
    await prisma.$disconnect();
  }
};

// Tambahkan fungsi-fungsi CRUD lainnya sesuai kebutuhan
