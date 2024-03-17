import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Api } from "@/api";

import type { IUserResponseGet } from "./type";

export const useUserGet = () => {
    const { search } = useLocation();

    const getData = (search: string) =>
        Api.get<Array<IUserResponseGet>>("/users" + search).then((res) => res);

    const { isLoading, data: userData } = useQuery({
        queryKey: ["users", search],
        queryFn: () => getData(search),
    });

    const data = useMemo(() => {
        return userData !== undefined ? userData.data : [];
    }, [userData]);

    return {
        isLoading,
        data,
    };
};
