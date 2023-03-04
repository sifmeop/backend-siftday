import { Drink } from '@prisma/client';
import { DrinkService } from './drink.service';
export declare class DrinkController {
    private readonly drinksService;
    constructor(drinksService: DrinkService);
    getAll(): Promise<Drink[]>;
    getById(id: string): Promise<Drink>;
}
