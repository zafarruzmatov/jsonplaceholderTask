import { FC, useMemo } from "react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import type { IUserResponseGet } from "../type";

interface UserInfoProps {
    open: boolean;
    closeFn: () => void;
    data: IUserResponseGet | null;
}

export const UserInfo: FC<UserInfoProps> = ({ open, closeFn, data }) => {
    const userInfo = useMemo(() => {
        if (data === null) {
            return [];
        } else {
            return [
                {
                    id: 1,
                    name: "Title",
                    value: data.name,
                },
                {
                    id: 2,
                    name: "User Name",
                    value: data.username,
                },
                {
                    id: 3,
                    name: "Email",
                    value: data.email,
                },
                {
                    id: 4,
                    name: "Phone",
                    value: data.phone,
                },
                {
                    id: 5,
                    name: "Website",
                    value: data.website,
                },
                {
                    id: 6,
                    name: "City",
                    value: data.address.city,
                },
                {
                    id: 7,
                    name: "Street",
                    value: data.address.street,
                },
                {
                    id: 8,
                    name: "Company Name",
                    value: data.company.name,
                },
            ];
        }
    }, [data]);
    if (data === null) return null;
    return (
        <Sheet open={open} onOpenChange={() => closeFn()}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Users Info</SheetTitle>
                    {userInfo.map(({ id, name, value }) => (
                        <div key={id}>
                            <p className="text-sm font-medium leading-none">
                                {name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                {value}
                            </p>
                        </div>
                    ))}
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
};
