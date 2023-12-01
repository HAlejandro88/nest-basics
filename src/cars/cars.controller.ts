import { Body, Controller, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, ValidationPipe, UsePipes } from "@nestjs/common";
import { CarsService } from "./cars.service";
import { Car } from "./interfaces/car.interface";
import { CreateCarDto } from "./dto/create-car.dto";

@Controller('cars')
//@UsePipes(ValidationPipe) leve controller
export class CarsController {

  constructor(private readonly carsService: CarsService) {
  }
  @Get()
  getAllCars(): Array<Car> {
    return this.carsService.getAllCars()
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string): Car {
    return this.carsService.findCarById(id);
  }

  @Post()
  //@UsePipes(ValidationPipe) level endpoint
  createCar(@Body() createCarDto: CreateCarDto) {
    return createCarDto;
  }

  @Patch(':id')
  updateCar(@Body() car: Car, @Param('id', ParseIntPipe) id: number) {
    
  }

}
