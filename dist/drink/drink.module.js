"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrinkModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const drink_controller_1 = require("./drink.controller");
const drink_service_1 = require("./drink.service");
let DrinkModule = class DrinkModule {
};
DrinkModule = __decorate([
    (0, common_1.Module)({
        controllers: [drink_controller_1.DrinkController],
        providers: [drink_service_1.DrinkService, prisma_service_1.PrismaService]
    })
], DrinkModule);
exports.DrinkModule = DrinkModule;
//# sourceMappingURL=drink.module.js.map