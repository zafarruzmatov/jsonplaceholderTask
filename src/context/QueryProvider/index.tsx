import { FC } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import type { QueryContextProviderProps } from "./types";

const queryDevTools = true;

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false, // Disable resending of requests
            refetchOnWindowFocus: false,
        },
    },
});

const QueryContextProvider: FC<QueryContextProviderProps> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {!!queryDevTools && <ReactQueryDevtools initialIsOpen={false} />}
            {children}
        </QueryClientProvider>
    );
};

export default QueryContextProvider;
