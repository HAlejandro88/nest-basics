import { Injectable, NotFoundException } from "@nestjs/common";

export interface Car {
  id: number
  name: string
  brand: string
}

@Injectable()
export class CarsService {
  private cars: Array<Car> = [
    {
      id: 1,
      name: 'Fit',
      brand: 'Honda'
    },
    {
      id: 2,
      name: 'Rio',
      brand: 'KIA'
    },
    {
      id: 3,
      name: 'Beat',
      brand: 'Chevrolet'
    }
  ];

  public getAllCars(): Array<Car> {
    return this.cars
  }

  public findCarById(id: number): Car {
    const car = this.cars.find(c => c.id === id);

    if(!car) throw new NotFoundException(`Car with id ${id} Not found`);

    return car

  }


  public addCar(car: Car) {
    return this.cars.push(car)
  }
}
