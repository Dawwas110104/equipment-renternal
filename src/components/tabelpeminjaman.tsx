import { useEffect } from 'react';
import { prisma } from '@/lib/prisma';
import { Peminjaman } from '@/lib/admin';
import axios from 'axios';
import Link from 'next/link';

interface TabelPeminjamanProps {
  peminjamans: Peminjaman[];
  fetchPeminjamans: () => Promise<any>;
  setPeminjamans: any;
}

const TabelPeminjaman: React.FC<TabelPeminjamanProps> = ({ peminjamans, setPeminjamans, fetchPeminjamans }) => {
  const handleDelete = async (id: number) => {
    try {
      console.log(id);
      await axios.post('/api/deletepeminjaman', { id });
      const response = await fetchPeminjamans();
      if (response?.data?.result) {
        setPeminjamans(response.data.result);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4"></h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border">ID</th>
              <th className="py-2 px-4 border">Nama Barang</th>
              <th className="py-2 px-4 border">Tanggal Pinjam</th>
              <th className="py-2 px-4 border">Tanggal Kembali</th>
              <th className="py-2 px-4 border">Penyewa</th>
              <th className="py-2 px-4 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {peminjamans.map((peminjaman, index) => (
              <tr key={peminjaman.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="py-2 px-4 border">{peminjaman.id}</td>
                <td className="py-2 px-4 border">{peminjaman.barang?.nama}</td>
                <td className="py-2 px-4 border">{new Date(peminjaman.tanggalPinjam).toLocaleDateString()}</td>
                <td className="py-2 px-4 border">{peminjaman.tanggalKembali ? new Date(peminjaman.tanggalKembali).toLocaleDateString() : '-'}</td>
                <td className="py-2 px-4 border">{peminjaman.penyewa}</td>
                <td className="py-2 border flex">
                  <div className='mx-auto'>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-1 rounded"
                      onClick={() => handleDelete(peminjaman.id)}
                    >
                      Delete
                    </button>
                    <Link href={`/barang/editpeminjaman/${peminjaman.id}`}>
                      <button
                        className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-1 rounded"
                      >
                        Edit
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabelPeminjaman;


export const getServerSideProps = async () => {
  try {
    const peminjamans = await prisma.peminjaman.findMany({
      include: {
        barang: true,
      },
    });

    return {
      props: {
        peminjamans,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        peminjamans: [],
      },
    };
  }
};
