import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

type ResponseData = {
  message?: string;
  result?: any;
  error?: string;
  barang?: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === 'POST') {
    const { id } = req.query;
    const { barangId, barang, tanggalPinjam, tanggalKembali, penyewa } = req.body;

    try {
      if (!id || !barangId || !barang || !tanggalPinjam || !tanggalKembali || !penyewa) {
        return res.status(400).json({ error: 'Invalid data provided' });
      }

      console.log("sebelum update result")
      const updateResult = await prisma.peminjaman.update({
        where: { id: Number(id) },
        data: {
          tanggalPinjam: new Date(tanggalPinjam),
          tanggalKembali: new Date(tanggalKembali),
          penyewa: penyewa,
        },
      });

      console.log("sebelum update barang")
      const updateBarang = await prisma.barang.update({
        where: { id: Number(barangId) },
        data: {
          nama: barang
        },
      });

      return res.status(200).json({
        message: 'Update successful',
        result: updateResult,
        barang: updateBarang,
      });
    } catch (error) {
      console.error('Error updating data:', error);
      return res.status(500).json({ error: 'Error updating data' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
