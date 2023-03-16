import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class PromoService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.promo.findMany()
  }

  async checkPromo(title: string) {
    try {
      const result = await this.prisma.promo.findFirst({
        where: { title }
      })

      if (!result) {
        return { result: false }
      }

      return { result: true }
    } catch (error) {
      return { result: false }
    }
  }
}
