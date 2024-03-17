import { UserList } from "./components/UsersList";

export const UsersPage = () => {
    return (
        <section className="container">
            <h1 className="mb-5 text-2xl text-black dark:text-white">Users</h1>
            <UserList />
        </section>
    );
};
