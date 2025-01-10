import Cafe from "@/types/Cafe";
import { useApiWithToken } from "./useApi";

export default function useCafe() {
    const { loading, call } = useApiWithToken<Cafe[]>(import.meta.env.VITE_CAFE_LINK_API_URL + "/api/cafe/all", { method: 'GET' });
    return { loading, call };
}