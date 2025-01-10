import { TripPackage } from "@/types/TripPackage";
import { useApiWithToken } from "./useApi";

export default function useTripSearch() {
    const {loading, call} = useApiWithToken<TripPackage[]>(import.meta.env.VITE_API_URL + '/api/Package/search', {method: 'GET'});
    return {loading, call};
}