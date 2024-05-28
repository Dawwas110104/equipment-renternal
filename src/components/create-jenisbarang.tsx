"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { saveJenisBarang } from "@/lib/actions"; // Adjust the path as necessary
import { getJenisBarangs } from "@/lib/data";

const CreateJenisBarangForm = () => {
  const [nama, setNama] = useState("");
  const [error, setError] = useState<any>({});
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError({});

    const formData = new FormData();
    formData.append("nama", nama);
    console.log(formData.get("nama"));

    const result = await saveJenisBarang(null, formData);

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
            Buat Jenis Barang
          </h5>
          <div>
            <label
              htmlFor="nama"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nama Jenis Barang
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

export default CreateJenisBarangForm;
