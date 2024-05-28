import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { prisma } from '@/lib/prisma';
import { Barang } from '@/lib/admin';
import { EditButton, DeleteButton } from '@/components/button';

interface ProductListPageProps {
  barangs: Barang[];
}

const ProductListPage: React.FC<ProductListPageProps> = ({ barangs }) => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    // This effect could be used for client-side fetching if needed
  }, [id]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">OUR PRODUCT</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left">
          <thead className="text-sm text-gray-500 uppercase bg-gray-50">
            <tr className="bg-gray-200">
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Stock</th>
              <th className="px-4 py-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {barangs.map((product, index) => (
              <tr key={product.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">
                  <img src={""} alt={product.nama} className="w-16 h-16 object-cover" />
                </td>
                <td className="px-4 py-2">{product.nama}</td>
                <td className="px-4 py-2">{product.stok}</td>
                <td className="flex gap-1 justify-center py-2">
                  <EditButton />
                  <DeleteButton />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductListPage;

// Fetch data from backend
export const getServerSideProps = async (context: any) => {
  const { id } = context.params;
  const barangs = await prisma.barang.findMany({
    where: { jenisBarangId: parseInt(id as string, 10) },
  });

  return {
    props: {
      barangs,
    },
  };
};
