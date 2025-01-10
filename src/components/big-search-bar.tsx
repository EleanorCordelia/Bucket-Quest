import { SearchInput } from "./ui/search-input";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card } from "./ui/card"
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { useNavigate } from "react-router-dom";
import useActivityType from "@/hooks/useActivityType";
import { useEffect, useState } from "react";
import { ActivityType } from "@/types/ActivityType";
import { isLoggedin } from "@/utils/user";

const FormSchema = z.object({
    name: z.string(),
    location: z.string(),
    activityType: z.number(),
    budget: z.number().min(1),
    participants: z.number().min(1),
})

export function BigSearchBar() {
    const navigate = useNavigate();
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            location: "Ubud",
            activityType: 0,
            budget: 1000000,
            participants: 1,
        },
    })
    const {loading, call} = useActivityType();
    const [activityType, setActivityType] = useState<ActivityType[]>([]);

    useEffect(() => {
        async function fetchActivityType() {
            const response = await call();
            if (response.data) {
                setActivityType(response.data);
            }
        }
        fetchActivityType();
    }, []);
    async function onSubmit(data: z.infer<typeof FormSchema>) {
        if (!isLoggedin()){
            navigate('/login');
        }
        else {
            navigate(`/trip/search?name=${data.name}&location=${data.location}&activityType=${data.activityType}&budget=${data.budget}&participants=${data.participants}`);
        }
    }
    return (
        <Form {...form}>
            <form className="grid gap-6" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="w-full max-w-6xl flex flex-col items-center gap-4">
                    
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <SearchInput
                                        {...field}
                                        type="text"
                                        placeholder="Dive in Menjangan Island"
                                        className="w-full p-7 rounded-full shadow-lg"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    
                    <Card className="p-6 py-5 w-full">
                        <div className="grid md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="location"
                                render={({ field }) => (
                                    <div className="space-y-2">
                                        <FormItem>
                                            <Label htmlFor="location">Location</Label>
                                            <FormControl>
                                                <Input {...field} id="location" name="location" type="text" placeholder="Enter Location" />
                                            </FormControl>
                                        </FormItem>
                                        <FormMessage />
                                    </div>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="activityType"
                                render={({ field }) => (
                                    <div className="space-y-2">
                                        <FormItem>
                                            <Label htmlFor="activityType">Activity Type</Label>
                                            <Select onValueChange={event => field.onChange(+event)}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder={ loading ? 'loading...' : 'Enter Activity Type'} />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {activityType.map((type) => (
                                                        <SelectItem key={type.id} value={type.id.toString()}>{type.name}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    </div>
                                )}
                            />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="budget"
                                render={({ field }) => (
                                    <div className="space-y-2">
                                        <FormItem>
                                            <Label htmlFor="budget">Budget</Label>
                                            <FormControl>
                                                <div className="flex items-center rounded-lg border bg-background text-foreground">
                                                    <div className="flex items-center px-4 text-muted-foreground">
                                                        Rp
                                                    </div>
                                                    <Input {...field} id="budget" type="number" placeholder="Enter Budget" onChange={event => field.onChange(+event.target.value)} />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    </div>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="participants"
                                render={({ field }) => (
                                    <div className="space-y-2">
                                        <FormItem>
                                            <Label htmlFor="participants">Participants</Label>
                                            <FormControl>
                                                <Input {...field} id="participants" type="number" placeholder="Enter number of participants" onChange={event => field.onChange(+event.target.value)}/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    </div>
                                )}
                            />
                        </div>
                        <Button type="submit" className="w-full md:w-auto my-5">
                        Search
                        </Button>
                    </Card>
                </div>
            </form>
        </Form>
    );
}