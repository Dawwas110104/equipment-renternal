// models/Peminjaman.ts

import { PrismaClient } from '@prisma/client';

interface Peminjaman {
  id: number;
  barangId: number;
  tanggalPinjam: Date;
  tanggalKembali?: Date;
  penyewa: string;
}

export const createPeminjaman = async (data: Peminjaman) => {
  const prisma = new PrismaClient();
  try {
    const peminjaman = await prisma.peminjaman.create({
      data,
    });
    return peminjaman;
  } catch (error) {
    console.error('Error creating peminjaman:', error);
    throw new Error('Failed to create peminjaman');
  } finally {
    await prisma.$disconnect();
  }
};

// Tambahkan fungsi-fungsi CRUD lainnya sesuai kebutuhan
