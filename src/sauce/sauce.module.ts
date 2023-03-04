import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { SauceController } from './sauce.controller'
import { SauceService } from './sauce.service'

@Module({
  controllers: [SauceController],
  providers: [SauceService, PrismaService]
})
export class SauceModule {}
