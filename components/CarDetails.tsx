import { CarProps } from "@/types";


interface CarDetailsProps {
  isopen: boolean
  close: () => void;
  car: CarProps

}

function CarDetails({
  isopen,
  close,
  car
}: CarDetailsProps) {
  return (
    <div>CarDetails</div>
  )
}

export default CarDetails