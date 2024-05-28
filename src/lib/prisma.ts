import { PrismaClient } from "@prisma/client";

//membuat instance dari prisma client
declare global{
    var prisma: PrismaClient | undefined;
}

//mode porduction
export const prisma = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV !== "production") globalThis.prisma = prisma;