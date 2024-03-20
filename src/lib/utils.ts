import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { type Theme } from "@/context/ThemeProvider/types";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const isBrowserDefaultDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

export const getDefaultTheme = (storageKey: string): Theme => {
    const getLocalStorageKey = localStorage.getItem(storageKey);
    const localStorageTheme =
        getLocalStorageKey === "dark" || getLocalStorageKey === "light";
    const browserDefault = isBrowserDefaultDark() ? "dark" : "light";
    return localStorageTheme ? getLocalStorageKey : browserDefault;
};
