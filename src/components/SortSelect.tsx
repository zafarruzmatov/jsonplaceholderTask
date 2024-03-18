import { useSearchParams } from "react-router-dom";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";

export const SortSelect = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const orderSearchValue = searchParams.get("sort") ?? "Sort";

    const searchOrder = (value: string) => {
        searchParams.set("sort", value);
        setSearchParams(searchParams);
    };

    return (
        <Select onValueChange={searchOrder}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={orderSearchValue} />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="asc">ASC</SelectItem>
                <SelectItem value="desc">Desc</SelectItem>
            </SelectContent>
        </Select>
    );
};
