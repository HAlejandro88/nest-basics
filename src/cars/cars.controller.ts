import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { Car, CarsService } from "./cars.service";

@Controller('cars')
export class CarsController {

  constructor(private readonly carsService: CarsService) {
  }
  @Get()
  getAllCars(): Array<Car> {
    return this.carsService.getAllCars()
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number): Car {
    return this.carsService.findCarById(id);
  }

  @Post()
  createCar(@Body() car: Car) {
    this.carsService.addCar(car)
  }

  @Patch(':id')
  updateCar(@Body() car: Car, @Param('id', ParseIntPipe) id: number) {
    
  }

}
