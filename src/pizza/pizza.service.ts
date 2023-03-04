import { Injectable } from '@nestjs/common'
import { Pizza } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class PizzaService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<Pizza[]> {
    return this.prisma.pizza.findMany()
  }

  async getById(id: string): Promise<Pizza> {
    return this.prisma.pizza.findUnique({
      where: { id }
    })
  }
}
