"use client";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from 'next/router';
import { saveBarang } from "@/lib/product"; // Adjust the path as necessary

const CreateBarangForm = () => {
  const [nama, setNama] = useState("");
  const [stok, setStok] = useState("");
  const [error, setError] = useState<any>({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    // This effect could be used for client-side fetching if needed
  }, [id]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError({});

    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("stok", stok);
    // formData.append("jenisBarangId", ${id});

    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });

    const result = await saveBarang(null, formData);

    if (result?.Error) {
      setError(result.Error);
      Swal.fire({
        title: "Error!",
        text: result.Error.nama?.[0] || "An error occurred",
        icon: "error",
      });
    } else if (result?.message) {
      Swal.fire({
        title: "Error!",
        text: result.message,
        icon: "error",
      });
    } else {
      Swal.fire({
        title: "Berhasil!",
        text: "Jenis barang berhasil dibuat",
        icon: "success",
      });
      setNama("");
      router.push("/barang/ourproduct");
    }
  };

  return (
    <div className="flex justify-center items-center max-h-screen min-h-screen">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900 text-center dark:text-white">
            Buat Barang
          </h5>
          <div>
            <label
              htmlFor="nama"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nama Barang
            </label>
            <input
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              type="text"
              name="nama"
              id="nama"
              placeholder="Nama Jenis Barang..."
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
            {error.nama && <div className="mt-2 text-sm text-red-500">{error.nama[0]}</div>}
          </div>

          <div>
            <label
              htmlFor="stok"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Stok Barang
            </label>
            <input
              value={stok}
              onChange={(e) => setStok(e.target.value)}
              type="number"
              name="stok"
              id="stok"
              placeholder="Stok Barang..."
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
            {error.stok && <div className="mt-2 text-sm text-red-500">{error.stok[0]}</div>}
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBarangForm;
