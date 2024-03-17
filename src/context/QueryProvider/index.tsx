import { FC } from "react";
import { toast } from "@/components/ui/use-toast";
import {
    QueryCache,
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { cn } from "@/lib/utils";

import type { QueryContextProviderProps } from "./types";

const className = cn(
    "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4",
);

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false, // Disable resending of requests
            refetchOnWindowFocus: false,
        },
    },
    queryCache: new QueryCache({
        onError: (error) => {
            console.log("err");
            if (error.message === "Network Error") {
                toast({
                    className,
                    title: error.message,
                    description: "Please check your connection.",
                });
            } else {
                toast({
                    className,
                    title: error.message,
                });
            }
        },
    }),
});

const queryDevTools = import.meta.env.VITE__DEV_TOOLS_REACT_QUERY;

const QueryContextProvider: FC<QueryContextProviderProps> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {!!queryDevTools && <ReactQueryDevtools initialIsOpen={false} />}
            {children}
        </QueryClientProvider>
    );
};

export default QueryContextProvider;
