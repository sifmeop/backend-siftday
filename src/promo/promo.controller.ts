import { Controller, Get, Param } from '@nestjs/common'
import { Promo } from '@prisma/client'
import { PromoService } from './promo.service'

@Controller('promo')
export class PromoController {
  constructor(private readonly promoService: PromoService) {}

  @Get()
  async getAll(): Promise<Promo[]> {
    return this.promoService.getAll()
  }

  @Get(':title')
  async checkPromo(@Param('title') title: string): Promise<{ valid: boolean }> {
    return this.promoService.checkPromo(title)
  }
}
