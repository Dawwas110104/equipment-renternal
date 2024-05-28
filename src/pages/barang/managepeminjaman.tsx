import TabelPeminjaman from "@/components/tabelpeminjaman";// Pastikan path dan case sesuai
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const ManagePeminjaman = () => {
  const [peminjamans, setPeminjamans] = useState([]); // Pastikan untuk menyediakan state peminjamans

  const fetchPeminjamans = async () => {
    // Pastikan untuk mengambil data peminjamans
    try {
      return await axios.get("/api/getpeminjaman");
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  useEffect(() => {
    // Pastikan untuk mengambil data peminjamans
    fetchPeminjamans().then((response) => {
      if (response?.data?.result) {
        console.log(response.data.result);
        setPeminjamans(response.data.result);
      }
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Manage Peminjaman Equipment</h1>
      {/* button at up right */}
      <div className="flex justify-end">
        <Link href="/barang/tambahpeminjaman">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
            Add Peminjaman
          </button>
        </Link>
      </div>
      <TabelPeminjaman peminjamans={peminjamans} fetchPeminjamans={fetchPeminjamans} setPeminjamans={setPeminjamans} /> {/* Pastikan untuk menyediakan data peminjamans */}
    </div>
  );
};

export default ManagePeminjaman;

