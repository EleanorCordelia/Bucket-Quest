import { SearchInput } from "./ui/search-input";

export function BigSearchBar() {
    return (
            <div className="w-full max-w-3xl flex items-center gap-4">
                
                <SearchInput
                    type="text"
                    placeholder="Dive in Menjangan Island"
                    className="w-full p-7 rounded-full shadow-lg"
                />
            </div>
    );
}