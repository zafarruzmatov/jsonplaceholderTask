import ThemeProvider from "@/context/ThemeProvider";
import QueryContextProvider from "@/context/QueryProvider";
import { Layout } from "@/components";
import { UsersPage } from "@/pages";

function App() {
    return (
        <ThemeProvider>
            <QueryContextProvider>
                <Layout>
                    <UsersPage />
                </Layout>
            </QueryContextProvider>
        </ThemeProvider>
    );
}

export default App;
