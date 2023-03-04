import { Injectable } from '@nestjs/common'
import { Sauce } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class SauceService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<Sauce[]> {
    return this.prisma.sauce.findMany()
  }

  async getById(id: string): Promise<Sauce> {
    return this.prisma.sauce.findUnique({
      where: { id }
    })
  }
}
