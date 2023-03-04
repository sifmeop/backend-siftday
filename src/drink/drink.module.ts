import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { DrinkController } from './drink.controller'
import { DrinkService } from './drink.service'

@Module({
  controllers: [DrinkController],
  providers: [DrinkService, PrismaService]
})
export class DrinkModule {}
