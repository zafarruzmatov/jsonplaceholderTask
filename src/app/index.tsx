import { ThemeProvider } from "@/context/ThemeProvider";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <ModeToggle />
            <Button>Hi</Button>
        </ThemeProvider>
    );
}

export default App;
