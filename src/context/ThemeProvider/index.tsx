import { useState, useEffect, createContext } from "react";
import { getDefaultTheme, isBrowserDefaultDark } from "@/lib/utils";

import type { Theme, ThemeProviderProps, ThemeProviderState } from "./types";

const initialState: ThemeProviderState = {
    theme: "system",
    setTheme: () => null,
};

export const ThemeProviderContext =
    createContext<ThemeProviderState>(initialState);

const ThemeProvider = ({
    children,
    defaultTheme = "system",
    storageKey = "vite-ui-theme",
    ...props
}: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(
        defaultTheme ?? getDefaultTheme(storageKey),
    );

    const addThemeRoot = (theme: Theme) => {
        const root = window.document.documentElement;

        root.classList.remove("light", "dark");

        if (theme === "system") {
            const systemTheme = isBrowserDefaultDark() ? "dark" : "light";

            root.classList.add(systemTheme);
            return;
        }

        root.classList.add(theme);
    };

    useEffect(() => {
        addThemeRoot(theme);
    }, []);

    const value = {
        theme,
        setTheme: (theme: Theme) => {
            localStorage.setItem(storageKey, theme);
            setTheme(theme);
            addThemeRoot(theme);
        },
    };

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    );
};

export default ThemeProvider;
