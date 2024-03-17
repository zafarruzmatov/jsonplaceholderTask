import { Table } from "@/components";
import { useUserGet } from "../services";
import { userColumns } from "./users-columns";
import { TableFilter } from "./TableFilter";

export const UserList = () => {
    const { data, isLoading } = useUserGet();
    return (
        <>
            <TableFilter />
            <Table loading={isLoading} columns={userColumns} data={data} />
        </>
    );
};
