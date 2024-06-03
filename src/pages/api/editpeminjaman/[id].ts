import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

type ResponseData = {
    message?: string;
    result?: any;
    Error?: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    if (req.method === "GET") {
        const { id } = req.query;

        if (!id) {
            return res.status(400).json({
                message: "ID query parameter is required",
            });
        }

        const result = await prisma.peminjaman.findFirst({
            where: { id: Number(id) }
        });

        res.setHeader('Cache-Control', 'no-cache'); // Tambahkan header Cache-Control: no-cache

        return res.status(200).json({
            message: `success`,
            result
        });
    } else {
        res.setHeader("Allow", ["GET"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
