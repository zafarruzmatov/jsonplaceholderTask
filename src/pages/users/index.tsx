import { Table } from "@/components";
import { userColumns } from "./users-columns";
import { useUserGet } from "./services";

export const UsersPage = () => {
    const { data, isLoading } = useUserGet();
    return (
        <section className="container">
            <h1 className="mb-5 text-2xl text-black dark:text-white">Users</h1>
            <Table loading={isLoading} columns={userColumns} data={data} />
        </section>
    );
};
