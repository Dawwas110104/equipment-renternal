import { getBarangById } from '../models/barang';
import Link from 'next/link';
import Sidebar from '../components/sidebar';

const HomePage = () => {
  // Contoh penggunaan model
  const fetchBarang = async () => {
    try {
      const barang = await getBarangById(1);
      console.log('Barang:', barang);
    } catch (error) {
      console.error('Error fetching barang:', error);
    }
  };

  fetchBarang();

  return (
    <div className="flex h-screen">
      <Sidebar></Sidebar>
      <div className="flex-1 overflow-y-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to My App!</h1>
        <p className="text-gray-700">
          This is the homepage content. You can add more content here.
        </p>
      </div>
    </div>
  );
};

export default HomePage;

// import ContactTable from "@/components/contact-table"
// import Search from "@/components/search";
// import { CreateButton } from "@/components/button";

// const Contacts = () => {
//   return (
//     <div className="max-w-screen-md mx-auto mt-5">
//         <div className="flex items-center justify-between gap-1 mb-5">
//           <Search/>
//           <CreateButton/>
//         </div>
//         <ContactTable />
//     </div>
//   )
// }

// export default Contacts;