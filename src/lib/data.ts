//pada file ini semua data fetching akan ditempatkan

import { prisma } from "@/lib/prisma";


export const getJenisBarangs = async () => {
    try {
        const jenisBarangs = await prisma.jenisBarang.findMany();
        return jenisBarangs;
    } catch (error) {
        throw new Error("Failed to fetch jenis barang data");
    }
};


export const getPeminjamans = async () => {
    try {
        const peminjamans = await prisma.peminjaman.findMany({
            include: {
                barang: true,
            },
        });
        return peminjamans;
    } catch (error) {
        // console.error("Error fetching peminjamans:", error.message);
        // console.error(error.stack);
        throw new Error("Failed to fetch peminjaman data");
    }
};


