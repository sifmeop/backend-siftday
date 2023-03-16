import { PrismaService } from 'src/prisma.service';
export declare class PromoService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<import(".prisma/client").Promo[]>;
    checkPromo(title: string): Promise<{
        result: boolean;
    }>;
}
