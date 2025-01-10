import { TripPackage } from "@/types/TripPackage";
import { useApiWithToken } from "./useApi";

export default function useTripDetail(id : number) {
    const {loading, call} = useApiWithToken<TripPackage>(import.meta.env.VITE_API_URL + '/api/Package/' +  id, {method: 'GET'});
    return {loading, call};
}