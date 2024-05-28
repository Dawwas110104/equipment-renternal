import Createform from "@/components/create-form";
import { prisma } from "@/lib/prisma";
import { GetServerSideProps } from "next";
import CreateJenisBarangForm from "@/components/create-jenisbarang";


const CreateJenisPage = () => {
    return (
        <div className="max-w-md mx-auto mt-5">
            <h1 className="text-2x1 text-center mb-2">Add New Product</h1>
            <CreateJenisBarangForm/>
        </div>
    );
};



export default CreateJenisPage;