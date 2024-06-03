import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

type ResponseData = {
    message?: string;
    result?: any;
    Error?: any;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    if (req.method === "POST") {
        const { id } = req.body;
        try {
            const result = await prisma.peminjaman.delete({
                where: {
                    id: parseInt(id),
                },
            });
            res.status(200).json({ message: "Data berhasil dihapus", result });
        } catch (error) {
            res.status(400).json({ message: "Data gagal dihapus", Error: error });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}