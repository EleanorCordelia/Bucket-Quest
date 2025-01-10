import useTripDetail from "@/hooks/useTripDetail";
import { TripPackage } from "@/types/TripPackage";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react"
import { usePostBook } from "@/hooks/useBook";
import { LoadingSpinner } from "@/components/ui/spinner";
import { useToast } from "@/hooks/use-toast";

const FormSchema = z.object({
    name: z.string(),
    phone: z.string(),
    email: z.string().email(),
    date: z.date(),
    participants: z.number(),
})

export default function DetailTrip() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { loading, call } = useTripDetail(parseInt(id ?? '0'));
    const [trip, setTrip] = useState<TripPackage | null>(null);
    const {loading: loadingPost, call: callPost} = usePostBook();
    const { toast } = useToast()
    const form = useForm<z.infer<typeof FormSchema>>({
            resolver: zodResolver(FormSchema),
            defaultValues: {
                name: "",
                phone: "",
                email: "",
                date: new Date(),
                participants: 1,
            },
        })
    async function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data.date.toISOString().slice(0, 10));
        const result = await callPost({
            packageId: parseInt(id ?? '0'),
            contactName: data.name,
            contactPhone: data.phone,
            contactEmail: data.email,
            date: data.date.toISOString().slice(0, 10),
            participants: data.participants,
        });
        if (result.error) {
            toast({
                variant: "destructive",
                title: "Pemesanan tidak berhasil",
                description: "Pemesanan gagal",
                action: <Button variant="link" onClick={() => {}}>Coba lagi</Button>,
            })
        }
        if (result.data) {
            toast({
                variant: "default",
                title: "Login berhasil",
                description: "Anda berhasil login",
            })
            navigate(`/booking`);
        }
    }
    useEffect(() => {
       async function fetchTrip() {
              const result = await call();
              if (result.data) {
                  setTrip(result.data);
              }
         }
            fetchTrip();
    },[]);
    return (
        <div className="pt-14 lg:px-14 px-6 lg:pt-24 border-b-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {
                    loading ? <div>Loading...</div> : trip ? (
                        <>
                            
                                {
                                    trip.trips?.slice(0,3).map((tr, iindex) => {
                                        return (
                                            tr.photos?.map((photo, index) => {
                                                return (
                                                    <div className="" key={`${index}-${iindex}`}>
                                                        <img key={`${index}-${iindex}`} src={photo.url} alt="trip" className="h-full w-auto rounded-xl" />
                                                    </div>
                                                )
                                            })
                                        )
                                    }
                                    )
                                }
                        </>
                    ) : <div>No data</div>
                }
            </div>
            <div className="flex flex-col items-start py-4">
                <p>Detail</p>
                <p className="text-2xl font-bold">{trip?.name}</p>
                <ol className="list-decimal px-5 flex flex-col items-start gap-2 text-[#55565A]">
                    {
                        trip?.trips?.map((trip, index) => {
                            return (
                                <li key={index}>
                                    <div className="flex flex-col items-start">
                                        <div>{trip.name}</div>
                                        <ul className="list-disc text-left px-5">
                                            <li>Deskripsi: {trip.description}</li>
                                            <li>Durasi: {trip.duration}</li>
                                            <li>Harga: Rp{trip.price}</li>
                                            <li>Catatan: {trip.catatan}</li>
                                        </ul>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
            {/* card pemesanan */}
            <div>
            <Form {...form}>
            <form className="grid gap-6" onSubmit={form.handleSubmit(onSubmit)}>
            <Card className="p-6 py-5 w-full text-start ">
            <p className="text-2xl font-bold">Pemesanan</p> 

                        <div className="grid md:grid-cols-1 gap-4 ">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <div className="space-y-2 ">
                                        <FormItem>
                                            <FormLabel htmlFor="name">Name</FormLabel>
                                            <FormControl>
                                                <Input {...field} id="name" name="name" type="text" placeholder="Enter Name" />
                                            </FormControl>
                                        </FormItem>
                                        <FormMessage />
                                    </div>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <div className="space-y-2">
                                        <FormItem>
                                            <FormLabel htmlFor="phone">Phone</FormLabel>
                                            <FormControl>
                                                <Input {...field} id="phone" name="phone" type="text" placeholder="Enter Phone" />
                                            </FormControl>
                                        </FormItem>
                                        <FormMessage />
                                    </div>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <div className="space-y-2">
                                        <FormItem>
                                            <FormLabel htmlFor="email">Email</FormLabel>
                                            <FormControl>
                                                <Input {...field} id="email" name="email" type="text" placeholder="Enter Email" />
                                            </FormControl>
                                        </FormItem>
                                        <FormMessage />
                                    </div>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="date"
                                render={({ field }) => (
                                    <div className="space-y-2">
                                        <FormItem className="flex flex-col">
                                            <FormLabel htmlFor="date">Date</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "pl-3 text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                    >
                                                    {field.value ? (
                                                        format(field.value, "PPP")
                                                    ) : (
                                                        <span>Pick a date</span>
                                                    )}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date) =>
                                                    date < new Date(new Date().setDate(new Date().getDate() - 1)) 
                                                    }
                                                    initialFocus
                                                />
                                                </PopoverContent>
                                            </Popover>
                                        </FormItem>
                                        <FormMessage />
                                    </div>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="participants"
                                render={({ field }) => (
                                    <div className="space-y-2">
                                        <FormItem>
                                            <FormLabel htmlFor="participants">Participants</FormLabel>
                                            <FormControl>
                                                <Input {...field} id="participants" name="participants" type="number" placeholder="Enter number of participants" onChange={event => field.onChange(+event.target.value)} />
                                            </FormControl>
                                        </FormItem>
                                        <FormMessage />
                                    </div>
                                )}
                            />
                        </div>
                        <div className="flex w-full items-end justify-end">
                        <Button type="submit" className="w-full md:w-auto my-5" disabled={loadingPost}>
                            Book
                            <LoadingSpinner hidden={!loadingPost} />
                        </Button>
                        </div>
                    </Card>
                </form>
            </Form>
            </div>
        </div>
    )
}