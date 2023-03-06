import { Controller } from '@nestjs/common'
import { Get, Param } from '@nestjs/common/decorators'
import { Drink } from '@prisma/client'
import { DrinkService } from './drink.service'

@Controller('drink')
export class DrinkController {
  constructor(private readonly drinksService: DrinkService) {}

  @Get()
  async getAll(): Promise<Drink[]> {
    return this.drinksService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Drink> {
    return this.drinksService.getById(id)
  }
}
