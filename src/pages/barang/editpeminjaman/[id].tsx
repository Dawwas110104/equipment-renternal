"use client"
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TambahPeminjaman = () => {
    const router = useRouter();
    const { id } = router.query;

    const [loading, setLoading] = useState(false);
    const [barangId, setBarangId] = useState<any[]>([]);
    const [barang, setBarang] = useState('');
    const [tanggalPinjam, setTanggalPinjam] = useState(new Date());
    const [tanggalKembali, setTanggalKembali] = useState(new Date());
    const [penyewa, setPenyewa] = useState('');

    const [data, setData] = useState<any[]>([]);


    useEffect(() => {
        const fetchBarang = async () => {
            if (id) { // Pastikan id tersedia
                setLoading(true);
                try {
                    const result = await axios.get(`/api/editpeminjaman/${id}`);
                    setData(result.data.result);

                    const resultBarang = await axios.get(`/api/getbarang/${id}`);
                    setBarang(resultBarang.data.data);
                } catch (error) {
                    console.error("Error fetching data:", error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchBarang();
    }, [id]); // Tambahkan dependensi id untuk memastikan dijalankan ulang saat id berubah


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post(`/api/updatepeminjaman/${id}`, {
                barangId,
                barang,
                tanggalPinjam,
                tanggalKembali,
                penyewa
            });
            router.push('/barang/managepeminjaman');
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="max-w-md mx-auto mt-10">
                    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="barang">
                                Barang
                            </label>
                            <input
                                id='barang'
                                type='text'
                                value={barang}
                                onChange={(e) => setBarang(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tanggalPinjam">
                                Tanggal Pinjam
                            </label>
                            <DatePicker
                                selected={tanggalPinjam}
                                onChange={(date) => setTanggalPinjam(date!)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tanggalKembali">
                                Tanggal Kembali
                            </label>
                            <DatePicker
                                selected={tanggalKembali}
                                onChange={(date) => setTanggalKembali(date!)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="penyewa">
                                Penyewa
                            </label>
                            <input
                                type="text"
                                id="penyewa"
                                value={penyewa}
                                onChange={(e) => setPenyewa(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    )
}

export default TambahPeminjaman;
