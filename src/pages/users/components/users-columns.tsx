import type { IColumnProps } from "@/components/Table/types";
import type { IUserResponseGet } from "../type";

export const userColumns: Array<IColumnProps<IUserResponseGet>> = [
    {
        key: "username",
        title: "Username",
    },
    {
        key: "name",
        title: "Name",
    },
    {
        key: "email",
        title: "Email",
    },
];
