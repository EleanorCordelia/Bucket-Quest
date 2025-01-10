import { useApiWithToken } from "./useApi";
import { Booking } from "@/types/Booking";

export function usePostBook() {
    const {loading, call} = useApiWithToken<Booking>(import.meta.env.VITE_API_URL + '/api/Booking', {method: 'POST'});
    return {loading, call};
}

export function useGetBook() {
    const {loading, call} = useApiWithToken<Booking[]>(import.meta.env.VITE_API_URL + '/api/Booking', {method: 'GET'});
    return {loading, call};
}