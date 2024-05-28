"use client"
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TambahPeminjaman = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [barangId, setBarangId] = useState(0);
    const [optionBarang, setOptionBarang] = useState([{
        id: 0,
        nama: '',
        stok: 0,
        gambar: '',
        dipinjam: false,
        jenisBarangId: 0,
        tanggalPinjam: new Date(),
        tanggalKembali: new Date(),
    }]); // Tambahkan state untuk menyimpan data barang
    const [tanggalPinjam, setTanggalPinjam] = useState(new Date());
    const [tanggalKembali, setTanggalKembali] = useState(new Date());
    const [penyewa, setPenyewa] = useState('');

    async function fetchBarang() {
        setLoading(true);
        // Logika untuk mengambil data barang
        const result = await axios.get('/api/getallbarang');
        console.log(result.data.result);
        setOptionBarang(result.data.result);
    }

    useEffect(() => {
        if (optionBarang.length > 0) {
            setLoading(false);
            setBarangId(optionBarang[0].id);
        }
    }, [optionBarang]);

    useEffect(() => {
        // Logika untuk mengambil data barang
        fetchBarang();
    }, []);

    const handleSubmit: any = async (e: Event) => {
        e.preventDefault();
        // Logika untuk menangani submit form
        console.log({
            barangId,
            tanggalPinjam,
            tanggalKembali,
            penyewa
        });
        await axios.post('/api/tambahpeminjaman', {
            barangId,
            tanggalPinjam,
            tanggalKembali,
            penyewa
        });
        router.push('/barang/managepeminjaman');
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
                            <select
                                id="barang"
                                value={barangId}
                                onChange={(e) => setBarangId(Number(e.target.value))}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                {/* <option value="">Pilih Barang</option>
                                <option value="Barang1">Barang 1</option>
                                <option value="Barang2">Barang 2</option>
                                <option value="Barang3">Barang 3</option> */}
                                {optionBarang.map((item: any) => (
                                    <option key={item.id} value={item.id}>{item.nama}</option>
                                ))}
                            </select>
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
            )
            }
        </>
    )
}

export default TambahPeminjaman;
