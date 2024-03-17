import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "@/context/ThemeProvider";
import QueryContextProvider from "@/context/QueryProvider";
import { Layout } from "@/components";
import { UsersPage } from "@/pages";

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <QueryContextProvider>
                    <Layout>
                        <UsersPage />
                    </Layout>
                </QueryContextProvider>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
