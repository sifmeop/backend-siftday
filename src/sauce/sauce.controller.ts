import { Controller, Get, Param } from '@nestjs/common'
import { Sauce } from '@prisma/client'
import { SauceService } from './sauce.service'

@Controller('sauces')
export class SauceController {
  constructor(private readonly sauceService: SauceService) {}

  @Get()
  async getAll(): Promise<Sauce[]> {
    return this.sauceService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Sauce> {
    return this.sauceService.getById(id)
  }
}
