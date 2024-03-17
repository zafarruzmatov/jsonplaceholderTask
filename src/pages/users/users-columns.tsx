import type { IColumnProps } from "@/components/Table/types";
import type { IUserResponseGet } from "./type";

export const userColumns: Array<IColumnProps<IUserResponseGet>> = [
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
                <div className="font-bold text-blue-500">{record.email}</div>
            );
        },
    },
];
