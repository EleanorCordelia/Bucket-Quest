import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useGetBook } from "@/hooks/useBook";
import { Booking } from "@/types/Booking";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const BookingCard: React.FC<Booking> = ({contactName, contactEmail, contactPhone, participants, totalPrice, tripPackage, date}) => {
    return (
        <Card>
            <div className="flex flex-col items-start p-6">
                <p className="font-bold text-2xl">{tripPackage.name}</p>
                <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col gap-2 items-start w-full">
                        <p>Total Paricipants: {participants} participants</p>
                        <p>Total Price: Rp{totalPrice}</p>
                        <p>Booking Date: {date}</p>
                        <Accordion type="single" collapsible className="w-full" >
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Detail</AccordionTrigger>
                                <AccordionContent>
                                    <div className="flex flex-col gap-2 items-start w-full">
                                        <p>Contact Name: {contactName}</p>
                                        <p>Contact Email: {contactEmail}</p>
                                        <p>Contact Phone: {contactPhone}</p>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
                <Link to={'/trip/detail/' + tripPackage.id}>
                    <Button className="mt-4">View Trip</Button>
                </Link>
            </div>
        </Card>
    )
}
export default function Page() {
    const {loading, call} = useGetBook();
    const [bookings, setBookings] = useState<Booking[]>([]);

    useEffect(() => {
        async function fetchBookings() {
            const response = await call();
            if (response.data) {
                setBookings(response.data);
            }
        }
        fetchBookings();
    }, []);
    useEffect(() => {
        console.log(bookings);
    }, [bookings]);
    return (
        <div className="mt-14 pt-14">
            <h1 className="font-bold">Your Booking History</h1>
            <div className="grid gap-4 px-14 py-5">
                {loading && <p>Loading...</p>}
                {bookings.length > 0 ? bookings.map((booking) => (
                    <BookingCard key={booking.id} {...booking} />
                )) : !loading && <p>No booking history</p>}
            </div>
        </div>
    )
}