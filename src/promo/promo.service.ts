import { Injectable } from '@nestjs/common'
import type { Promo } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class PromoService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<Promo[]> {
    return this.prisma.promo.findMany()
  }

  async checkPromo(title: string): Promise<{ valid: boolean }> {
    try {
      const result = await this.prisma.promo.findFirst({
        where: { title }
      })

      if (!result) {
        return { valid: false }
      }

      return { valid: true }
    } catch (error) {
      return { valid: false }
    }
  }
}
