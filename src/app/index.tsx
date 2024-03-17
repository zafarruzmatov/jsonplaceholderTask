import { ThemeProvider } from "@/context/ThemeProvider";
import { Layout } from "@/components";
import { UsersPage } from "@/pages";

function App() {
    return (
        <ThemeProvider>
            <Layout>
                <UsersPage />
            </Layout>
        </ThemeProvider>
    );
}

export default App;
