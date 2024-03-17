import { Table } from "@/components";
import { IColumnProps } from "@/components/Table/types";

type Data = {
    id: number;
    name: string;
    username: string;
    email: string;
};

export const UsersPage = () => {
    const data: Data[] = [
        {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
        },
        {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv",
        },
    ];

    const columns: Array<IColumnProps<Data>> = [
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

    return (
        <section className="container">
            <h1 className="mb-5 text-2xl text-black">Users</h1>
            <Table columns={columns} data={data} />
        </section>
    );
};
