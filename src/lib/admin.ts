//pada file ini semua data fetching akan ditempatkan

import { prisma } from "@/lib/prisma";

export interface JenisBarang {
    id: number;
    nama: string;
  }
  
  export interface Barang {
    id: number;
    nama: string;
    stok: number;
    jenisBarangId: number;
  }

  export interface Peminjaman {
    id: number;
    barang: Barang;
    tanggalPinjam: Date;
    tanggalKembali: Date | null;
    penyewa: string;
  }
  

// export const getJenisBarang = async () => {
//     try {
//         const jenisBarang = await prisma.jenisBarang.findMany();
//         return jenisBarang;
//     } catch (error) {
//         throw new Error("Failed to fetch data");
//     }
// };


// export const getContacts = async () =>{
//     try {
//         const contacts = await prisma.contact.findMany();
//         return contacts;
//     } catch (error) {
//         throw new Error("Failed to fetch data");
//     }
// }