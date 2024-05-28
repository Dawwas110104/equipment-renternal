import { z } from "zod";
import axios from "axios";

const JenisSchema = z.object({
    nama: z.string().min(2, { message: "Nama jenis barang harus diisi" }),
});

export const saveJenisBarang = async (prevState: any, formData: FormData) => {

    console.log("Form Data:", formData.get("nama")); // Tambahkan console.log disini

    const validatedFields = JenisSchema.safeParse(Object.fromEntries(formData.entries()));
    console.log("Validated Fields:", validatedFields); // Tambahkan console.log disini

    if (!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors
        };
    }

    try {
        await axios.post("/api/savejenisbarang", validatedFields.data);
        return { success: true };
    } catch (error) {
        console.error(error);
        return { message: "Failed to create category" };
    }
};
