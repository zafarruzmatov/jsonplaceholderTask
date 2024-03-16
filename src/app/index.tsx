import { ThemeProvider } from "@/context/ThemeProvider";
import { Layout } from "@/components";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Layout>
                <p>Hi</p>
            </Layout>
        </ThemeProvider>
    );
}

export default App;
