import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Api } from "@/api";

import type { IUserResponseGet } from "./type";

export const useUserGet = () => {
    const getData = () =>
        Api.get<Array<IUserResponseGet>>("/users").then((res) => res);

    const { isLoading, data: userData } = useQuery({
        queryKey: ["users"],
        queryFn: () => getData(),
    });

    const data = useMemo(() => {
        return userData !== undefined ? userData.data : [];
    }, [userData]);

    return {
        isLoading,
        data,
    };
};
