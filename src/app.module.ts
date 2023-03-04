import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'
import { DrinkModule } from './drink/drink.module'
import { PizzaModule } from './pizza/pizza.module'
import { SauceModule } from './sauce/sauce.module'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public')
    }),
    PizzaModule,
    DrinkModule,
    SauceModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
