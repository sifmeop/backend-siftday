import { Pizza } from '@prisma/client';
import { PizzaService } from './pizza.service';
export declare class PizzaController {
    private readonly pizzaService;
    constructor(pizzaService: PizzaService);
    getAll(): Promise<Pizza[]>;
    getById(id: string): Promise<Pizza>;
}
