import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { prisma } from '@/lib/prisma';
import { JenisBarang, Barang } from '@/lib/admin';
import ProductForm from '@/components/productform';
import { CreateButton } from '@/components/button';

interface OurProductPageProps {
  jenisBarangs: JenisBarang[];
  barangs: Barang[];
}

const OurProductPage: React.FC<OurProductPageProps> = ({ jenisBarangs, barangs }) => {
  const [productCategories, setProductCategories] = useState<JenisBarang[]>([]);
  const [products, setProducts] = useState<Barang[]>([]);
  const [editingProductCategory, setEditingProductCategory] = useState<JenisBarang | null>(null);
  const router = useRouter();

  useEffect(() => {
    setProductCategories(jenisBarangs);
    setProducts(barangs);
  }, [jenisBarangs, barangs]);

  const handleCreateProductCategory = async (productCategory: JenisBarang) => {
    try {
      const createdProductCategory = await prisma.jenisBarang.create({ data: productCategory });
      setProductCategories([...productCategories, createdProductCategory]);
      setEditingProductCategory(null);
    } catch (error) {
      console.error('Failed to create product category:', error);
    }
  };

  const handleCategoryClick = (id: number) => {
    router.push(`/product-list/${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-center font-serif animate-bounce">ETERNAL&apos;S PRODUCT CATEGORY</h1>
      <div className="flex justify-end mb-4">
        <CreateButton />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productCategories.map((productCategory) => (
          <div
            key={productCategory.id}
            className="bg-white rounded-lg p-6 shadow-md cursor-pointer transform transition duration-300 hover:scale-105"
            onClick={() => handleCategoryClick(productCategory.id)}
          >
            <h2 className="text-xl font-bold mb-2">{productCategory.nama}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProductPage;

// Fetch data from backend
export const getServerSideProps = async () => {
  try {
    const jenisBarangs = await prisma.jenisBarang.findMany();
    const barangs = await prisma.barang.findMany();

    return {
      props: {
        jenisBarangs,
        barangs,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        jenisBarangs: [],
        barangs: [],
      },
    };
  }
};
