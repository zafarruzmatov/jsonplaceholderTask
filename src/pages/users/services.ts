import { Api } from "@/api";
import { useQuery } from "@tanstack/react-query";
import { IUserResponseGet } from "./type";
import { useMemo } from "react";

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
