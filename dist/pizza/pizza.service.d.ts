import { Pizza } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
export declare class PizzaService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<Pizza[]>;
    getById(id: string): Promise<Pizza>;
}
