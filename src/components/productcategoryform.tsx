// import { useState } from 'react';

// interface ProductCategoryFormProps {
//   onSubmit: (data: { nama: string }) => void;
//   initialValues: { nama: string };
//   isEditing: boolean;
// }

// const ProductCategoryForm: React.FC<ProductCategoryFormProps> = ({ onSubmit, initialValues, isEditing }) => {
//   const [nama, setNama] = useState(initialValues.nama);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSubmit({ nama });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded">
//       <div className="mb-4">
//         <label htmlFor="nama" className="block text-sm font-medium text-gray-700">Name</label>
//         <input
//           type="text"
//           id="nama"
//           value={nama}
//           onChange={(e) => setNama(e.target.value)}
//           className="mt-1 block w-full p-2 border border-gray-300 rounded"
//           placeholder="Enter category name"
//           required
//         />
//       </div>
//       <div className="flex justify-end">
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           {isEditing ? 'Update' : 'Create'}
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ProductCategoryForm;
