import { Promo } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
export declare class PromoService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<Promo[]>;
    checkPromo(title: string): Promise<{
        valid: boolean;
    }>;
}
