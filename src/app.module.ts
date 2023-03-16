import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DrinkModule } from './drink/drink.module'
import { PizzaModule } from './pizza/pizza.module'
import { PromoModule } from './promo/promo.module'
import { SauceModule } from './sauce/sauce.module'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public')
    }),
    PizzaModule,
    DrinkModule,
    SauceModule,
    PromoModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
