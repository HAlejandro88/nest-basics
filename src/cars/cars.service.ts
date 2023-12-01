import { Injectable, NotFoundException } from "@nestjs/common";
import { v4 as uuid } from 'uuid'
import {Car} from "./interfaces/car.interface";

@Injectable()
export class CarsService {
  private cars: Array<Car> = [
    {
      id: uuid(),
      name: 'Fit',
      brand: 'Honda'
    },
    {
      id: uuid(),
      name: 'Rio',
      brand: 'KIA'
    },
    {
      id: uuid(),
      name: 'Beat',
      brand: 'Chevrolet'
    }
  ];

  public getAllCars(): Array<Car> {
    return this.cars
  }

  public findCarById(id: string): Car {
    const car = this.cars.find(c => c.id === id);

    if(!car) throw new NotFoundException(`Car with id ${id} Not found`);

    return car

  }


  public addCar(car: Car) {
    return this.cars.push(car)
  }
}
