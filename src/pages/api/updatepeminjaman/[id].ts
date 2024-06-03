import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

type ResponseData = {
  message?: string;
  result?: any;
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === 'POST') {
    const { id } = req.query;
    const { barangId, barang, tanggalPinjam, tanggalKembali, penyewa } = req.body;

    try {
      const updateResult = await prisma.peminjaman.update({
        where: { id: Number(id) },
        data: {
          barangId,
        //   barang,
          tanggalPinjam: new Date(tanggalPinjam),
          tanggalKembali: new Date(tanggalKembali),
          penyewa,
        },
      });

      const UpdateBarang = await prisma.barang.update({
        where: { id: Number(id)},
        data: {
            nama: barang
        },
      });

      return res.status(200).json({
        message: 'Update successful',
        result: updateResult,
      });
    } catch (error) {
      console.error('Error updating peminjaman:', error);
      return res.status(500).json({
        error: 'Error updating peminjaman',
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
