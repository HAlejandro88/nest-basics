import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = ['Honda', 'Toyota', 'Jeep'];

  public getAllCars(): Array<string> {
    return  this.cars
  }

  public findCarById(id: number): string {
    return  this.cars[id];
  }
}
