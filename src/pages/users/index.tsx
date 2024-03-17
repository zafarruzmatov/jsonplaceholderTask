import { Table } from "@/components";
import { useUserGet } from "./services";

import type { IColumnProps } from "@/components/Table/types";
import type { IUserResponseGet } from "./type";

export const UsersPage = () => {
    const columns: Array<IColumnProps<IUserResponseGet>> = [
        {
            key: "username",
            title: "username",
        },
        {
            key: "name",
            title: "name",
        },
        {
            key: "email",
            title: "email",

            render: (_, record) => {
                return (
                    <div className="font-bold text-blue-500">
                        {record.email}
                    </div>
                );
            },
        },
    ];

    const { data, isLoading } = useUserGet();

    return (
        <section className="container">
            <h1 className="mb-5 text-2xl text-black dark:text-white">Users</h1>
            <Table loading={isLoading} columns={columns} data={data} />
        </section>
    );
};
