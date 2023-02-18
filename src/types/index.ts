import { FuelTypeEnum } from "./enums";

export type Car = {
  name: string;
  color: string;
  fuelConsumption: number;
  fuelType: FuelTypeEnum;
}