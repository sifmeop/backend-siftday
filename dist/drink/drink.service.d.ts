import { Drink } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
export declare class DrinkService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<Drink[]>;
    getById(id: string): Promise<Drink>;
}
