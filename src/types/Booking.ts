import { TripPackage } from "./TripPackage";
import { userDto } from "./UserDto";

export interface Booking {
    id: number;
    contactName: string;
    contactEmail: string;
    contactPhone: string;
    participants: number;
    totalPrice: number;
    booker: userDto;
    tripPackage: TripPackage;
    date: string;
}