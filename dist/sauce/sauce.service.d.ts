import { Sauce } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
export declare class SauceService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<Sauce[]>;
    getById(id: string): Promise<Sauce>;
}
