import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import {CarsService} from "./cars.service";

@Controller('cars')
export class CarsController {

  constructor(private readonly carsService: CarsService) {
  }
  @Get()
  getAllCars(): Array<string> {
    return this.carsService.getAllCars()
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number): string {
    return this.carsService.findCarById(id);
  }

}
