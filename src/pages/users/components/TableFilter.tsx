import { SortSelect } from "@/components";
import { SearchFilterInput } from "./SearchFilterInput";

export const TableFilter = () => {
    return (
        <div className="mb-4 flex flex-wrap gap-x-3 gap-y-1">
            <SearchFilterInput />
            <SortSelect />
        </div>
    );
};
