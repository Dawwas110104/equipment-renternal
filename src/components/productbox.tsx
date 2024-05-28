import React from 'react';
import { JenisBarang, Barang } from '@/lib/admin';

interface ProductBoxProps {
  jenisBarang: JenisBarang; // Data jenis barang
  barangs: Barang[]; // Data barang-barang
}

const ProductBox: React.FC<ProductBoxProps> = ({ jenisBarang, barangs }) => {
  return (
    <div>
      <h2>{jenisBarang.nama}</h2>
      <ul>
        {barangs.map((barang) => (
          <li key={barang.id}>
            {barang.nama} - Stok: {barang.stok}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductBox;
