import { Sauce } from '@prisma/client';
import { SauceService } from './sauce.service';
export declare class SauceController {
    private readonly sauceService;
    constructor(sauceService: SauceService);
    getAll(): Promise<Sauce[]>;
    getById(id: string): Promise<Sauce>;
}
