import { PromoService } from './promo.service';
export declare class PromoController {
    private readonly promoService;
    constructor(promoService: PromoService);
    getAll(): Promise<import(".prisma/client").Promo[]>;
    checkPromo(title: string): Promise<{
        result: boolean;
    }>;
}
