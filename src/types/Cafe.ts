import CafeType from "./CafeType";

export default interface Cafe {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    priceAverage: number;
    districtAddress: string;
    cityAddress: string;
    provinceAddress: string;
    fullAddress: string;
    likeCount: number;
    isLiked: boolean;
    types: CafeType[];
    specials: string[];
}