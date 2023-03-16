import { Controller, Get, Param } from '@nestjs/common'
import { PromoService } from './promo.service'

@Controller('promo')
export class PromoController {
  constructor(private readonly promoService: PromoService) {}

  @Get()
  async getAll() {
    return this.promoService.getAll()
  }

  @Get(':title')
  async checkPromo(@Param('title') title: string) {
    return this.promoService.checkPromo(title)
  }
}
