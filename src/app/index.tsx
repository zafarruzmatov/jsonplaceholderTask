import { ThemeProvider } from "@/context/ThemeProvider";
import { Layout } from "@/components";

function App() {
    return (
        <ThemeProvider>
            <Layout>
                <p>Hi</p>
            </Layout>
        </ThemeProvider>
    );
}

export default App;
