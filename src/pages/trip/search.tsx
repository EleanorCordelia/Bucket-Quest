import { Button } from "@/components/ui/button";
import useQueryParams from "@/hooks/useQueryParams";
import useTripSearch from "@/hooks/useTripSearch";
import { TripPackage } from "@/types/TripPackage";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CardPackage: React.FC<TripPackage & {participant: number}> = ({id, name, location, pricePerPerson, trips, participant}) => {
    
    return (
        <div className="w-full flex flex-row lg:py-8 lg:px-8 py-4 px-4 bg-white rounded-lg gap-2 shadow-2xl"> 
            <div className="flex">
            {/* 
            // @ts-expect-error ignore trips undefined case */}
                <img src={trips[0].photos[0].url ?? ''} alt="trip" className="hidden md:flex w-32 h-32 md:w-64 md:h-64 rounded-lg" />

            </div>
            <div className="flex flex-col text-left w-full">
                <h1 className="text-2xl font-bold">{name}</h1>
                <p className="text-lg py-2">Rp{pricePerPerson} / person</p>
                <p className="text-lg py-2">Total: Rp{(pricePerPerson ?? 1) * participant}</p>
                <p className="text-lg py-2">{location}</p>
                {/* 
                // @ts-expect-error ignore trips undefined case */}
                <p className="text-ellipsis leading-9">{trips[0].description}</p>
                <div className="flex justify-end items-end h-full w-full">
                    <Link to={`/trip/detail/${id}`} className="">
                        <Button className="mt-4 bg-black text-white ">Book Now</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default function SearchPage() {
    const queryParams = useQueryParams();
    const { loading, call } = useTripSearch();
    const [tripPackages, setTripPackages] = useState<TripPackage[]>([]);
    useEffect(() => {
        async function fetchData() {
            const result = await call ({
                name: queryParams['name'],
                location: queryParams['location'],
                budget: parseInt(queryParams['budget']),
                activity_type: queryParams['activityType'] && queryParams['activityType'] !== '0' ? parseInt(queryParams['activityType']) : undefined,
                participants: parseInt(queryParams['participants']),
            })
            if (result.data) {
                setTripPackages(result.data);
            }
        }
        fetchData();
    }
    , []);
    return (
        <>
        <div className="pt-14 px-6 lg:pt-24 border-b-4 bg-blue-400">
            <div className="text-left">
                <p className="py-4 text-xl font-bold text-white">
                Get your Best Deals now!
                </p>
            </div>
            {
                loading && (
                    <div className="flex justify-center items-center h-32">
                        <p>Loading...</p>
                    </div>
                )
            }
            {
                !loading && tripPackages.length === 0 && (
                    <div className="flex justify-center items-center h-32">
                        <p>No data found</p>
                    </div>
                )
            }
            <div className="pb-8 lg:pb-16">
                
                <div className="flex flex-col justify-center items-center w-full gap-4">
                    {
                        tripPackages.slice(0,1).map((tripPackage, index) => (
                            <CardPackage key={index} {...tripPackage} participant={parseInt(queryParams['participants'])} />
                        ))
                    }
                </div>
            </div>
        </div>
        <div className="pt-14 lg:px-14 px-6 lg:pt-24">
            <div className="flex flex-col justify-center items-center w-full gap-4">
            {
                tripPackages.slice(1,6).map((tripPackage, index) => (
                    <CardPackage key={index} {...tripPackage} participant={parseInt(queryParams['participants'])} />
                ))
            }
            </div>
        </div>
        </>
    )
}