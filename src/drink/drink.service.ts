import { Injectable } from '@nestjs/common'
import { Drink } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class DrinkService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<Drink[]> {
    return this.prisma.drink.findMany()
  }

  async getById(id: string): Promise<Drink> {
    return this.prisma.drink.findUnique({
      where: { id }
    })
  }
}
