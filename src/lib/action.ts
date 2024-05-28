"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

//membuat schema untuk memvalidasi data
const ProductSchema = z.object({
    nama: z.string().min(1, { message: "Nama barang harus diisi" }),
    stok: z.number().int().nonnegative({ message: "Stok harus diisi berupa bilangan bulat" }),
    // harga: z.number().nonnegative({message: "Harga harus berupa bilangan non-negatif"}),
    gambar: z.string().url({ message: "Gambar harus berupa url yang valid" }),
    jenisBarangId: z.number().int().positive({ message: "Jenis barang ID harus berupa bilangan bulat positif" }),
});

export const saveProduct = async (prevState: any, formData: FormData) => {
    const validatedFields = ProductSchema.safeParse(
        Object.fromEntries(formData.entries())
    );

    if (!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors
        };
    }

    try {
        await prisma.barang.create({
            data: {
                nama: validatedFields.data.nama,
                stok: Number(validatedFields.data.stok),
                gambar: validatedFields.data.gambar,
                jenisBarangId: Number(validatedFields.data.jenisBarangId),

            },
        });
    } catch (error) {
        return { message: "Failed to create product " };
    }

    revalidatePath("/barang/ourproduct");
    redirect("/barang/ourproduct");
}

const JenisBarangSchema = z.object({
    nama: z.string().min(2, { message: "Nama jenis barang harus diisi" }),
});

export const saveJenisBarang = async (formData: FormData) => {
    const nama = formData.get("nama");

    if (!nama || typeof nama !== "string") {
        return {
            Error: {
                nama: "Nama jenis barang harus diisi",
            },
        };
    }

    const validatedFields = JenisBarangSchema.safeParse({ nama });

    if (!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors,
        };
    }

    try {
        await prisma.jenisBarang.create({
            data: {
                nama: validatedFields.data.nama,
            },
        });

        // Jika operasi berhasil, Anda dapat melakukan revalidasi dan pengalihan
        revalidatePath("/barang/ourproduct");
        redirect("/barang/ourproduct");
    } catch (error) {
        return { message: "Gagal membuat jenis barang" };
    }
};
