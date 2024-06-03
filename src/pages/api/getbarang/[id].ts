import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

type ResponseData = {
    message?: string;
    result?: any;
    data?: any;
    Error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    if (req.method === "GET") {
        const { id } = req.query;

        if (!id) {
            return res.status(400).json({
                message: "ID query parameter is required",
            });
        }
        

        const result = await prisma.barang.findFirst({
            where: { id: Number(id) }
        });

        if (!result) {
            return res.status(404).json({
                message: "Data not found",
            });
        }

        return res.status(200).json({
            message: `succcess`,
            result
        });
    } else {
        res.setHeader("Allow", ["GET"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}