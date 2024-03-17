import { useSearchParams } from "react-router-dom";
import { Icons } from "@/components";
import { useMemo } from "react";

export const TableFilter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const userSearchValue = searchParams.get("name") ?? "";

    const viewCloseBtn = useMemo(() => {
        return userSearchValue.length !== 0;
    }, [userSearchValue]);

    const deleteSearchParams = () => {
        searchParams.delete("name");
        setSearchParams(searchParams);
    };

    const searchName = (value: string) => {
        if (value.trim() !== "") {
            searchParams.set("name", value);
            setSearchParams(searchParams);
        } else {
            deleteSearchParams();
        }
    };

    return (
        <div className="mb-4">
            <div className="relative flex max-w-80 overflow-hidden rounded-lg border">
                <label
                    htmlFor="userSearch"
                    className="flex items-center justify-center px-2"
                >
                    <Icons.search />
                </label>
                <input
                    type="text"
                    id="userSearch"
                    placeholder="Search User"
                    value={userSearchValue}
                    className="grow bg-transparent px-2 py-2 outline-none"
                    onChange={(e) => searchName(e.target.value)}
                />

                {viewCloseBtn && (
                    <button
                        onClick={deleteSearchParams}
                        className="absolute right-2 top-2/4 -translate-y-2/4 p-1"
                    >
                        <Icons.close />
                    </button>
                )}
            </div>
        </div>
    );
};
