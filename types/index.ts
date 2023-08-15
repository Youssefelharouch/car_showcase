import { MouseEventHandler } from "react";
export interface CustomButtonProps {
  title: String;
  containerStyles?: String;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManufacturerProps {
  manufacturer: String;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  class: String;
  year: number;
}
