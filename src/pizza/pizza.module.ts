import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { PizzaController } from './pizza.controller'
import { PizzaService } from './pizza.service'

@Module({
  controllers: [PizzaController],
  providers: [PizzaService, PrismaService]
})
export class PizzaModule {}
