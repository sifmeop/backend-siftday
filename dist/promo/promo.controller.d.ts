import { Promo } from '@prisma/client';
import { PromoService } from './promo.service';
export declare class PromoController {
    private readonly promoService;
    constructor(promoService: PromoService);
    getAll(): Promise<Promo[]>;
    checkPromo(title: string): Promise<{
        valid: boolean;
    }>;
}
