import { Table } from "@/components";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components";
import { useUserGet } from "../services";
import { TableFilter } from "./TableFilter";

import type { IColumnProps } from "@/components/Table/types";
import type { IUserResponseGet } from "../type";
import { UserInfo } from "./UserInfo";
import { useState } from "react";
import UseEdit from "@/hooks/useEdit";

export const UserList = () => {
    const { data, isLoading } = useUserGet();
    const { editData, setEditData } = UseEdit<IUserResponseGet>();
    const [openMoodal, setOpenModal] = useState(false);

    const closeModal = () => {
        setOpenModal(false);
    };

    const userColumns: Array<IColumnProps<IUserResponseGet>> = [
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
        {
            key: "phone",
            title: "Phone",
        },

        {
            key: "id",
            title: "Actions",
            render: (_, record) => {
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <Icons.moreVertical />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem
                                onClick={() => {
                                    setOpenModal(true);
                                    setEditData(record);
                                }}
                                className="flex cursor-pointer items-center gap-x-1"
                            >
                                <Icons.eye />
                                <span>View</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                );
            },
        },
    ];
    return (
        <>
            <TableFilter />
            <Table loading={isLoading} columns={userColumns} data={data} />
            <UserInfo open={openMoodal} data={editData} closeFn={closeModal} />
        </>
    );
};
