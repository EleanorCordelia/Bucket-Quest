import { useApiWithToken } from "./useApi";
import { ActivityType } from "@/types/ActivityType";

export default function useActivityType() {
    const {loading, call} = useApiWithToken<ActivityType[]>(import.meta.env.VITE_API_URL + '/api/Activity', {method: 'GET'});
    return {loading, call};
}