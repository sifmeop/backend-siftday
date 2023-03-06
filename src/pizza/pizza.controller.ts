import { Controller, Get, Param } from '@nestjs/common'

import { Pizza } from '@prisma/client'
import { PizzaService } from './pizza.service'

@Controller('pizza')
export class PizzaController {
  constructor(private readonly pizzaService: PizzaService) {}

  @Get()
  async getAll(): Promise<Pizza[]> {
    return this.pizzaService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Pizza> {
    return this.pizzaService.getById(id)
  }
}
