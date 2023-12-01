// data transfer objetc


import { IsString } from "class-validator";

export class CreateCarDto {

  @IsString({ message: 'the brand is must be string an lowercase' })
  readonly brand: string;

  @IsString()
  readonly model: string;

}