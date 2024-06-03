import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

type ResponseData = {
    message?: string;
    Error?: any;
    result?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    if (req.method === "GET") {
        return res.status(200).json({ message: "Hello" });
    }
    if (req.method === "POST") {
        console.log(req.body.toString());
        const { nama } = req.body;

        if (!nama) {
            return res.status(400).json({ message: "Nama jenis barang harus diisi" });
        }

        try {
            await prisma.jenisBarang.create({
                data: {
                    nama,
                },
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Failed to create category" });
        }

        res.status(200).json({ message: "Jenis barang berhasil dibuat", result: nama });
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}