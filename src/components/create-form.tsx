"use client";

import { useFormState } from '@/lib/useformstate';
import { saveProduct } from '@/lib/action';
import { useEffect, useState } from 'react';

const Createform = () => {
  const [state, formAction] = useFormState(saveProduct, null);

  return (
    <div>
      <form onSubmit={formAction}>
        <div className='mb-5'>
          <label htmlFor="nama" className="block text-sm font-medium text-gray-950">Nama Barang</label>
          <input type="text" name='nama' id="nama" placeholder="Nama Barang..." className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
          <div id="nama-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.nama}</p>
          </div>
        </div>
        <div className='mb-5'>
          <label htmlFor="stok" className="block text-sm font-medium text-gray-950">Stok</label>
          <input type="number" name="stok" id="stok" placeholder="Stok..." className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
          <div id="stok-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.stok}</p>
          </div>
        </div>
        <div className='mb-5'>
          <label htmlFor="gambar" className="block text-sm font-medium text-gray-950">Gambar (URL)</label>
          <input type="text" name="gambar" id="gambar" placeholder="Gambar URL..." className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
          <div id="gambar-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.gambar}</p>
          </div>
        </div>
        <div className='mb-5'>
          <label htmlFor="jenisBarangId" className="block text-sm font-medium text-gray-950">Jenis Barang ID</label>
          <input type="number" name="jenisBarangId" id="jenisBarangId" placeholder="Jenis Barang ID..." className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
          <div id="jenisBarangId-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.jenisBarangId}</p>
          </div>
        </div>
        <div id="message-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.message}</p>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center">Save</button>
      </form>
    </div>
  );
};

export default Createform;
