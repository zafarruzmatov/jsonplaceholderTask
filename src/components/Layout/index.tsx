import { FC } from "react";
import { Header } from "@/components";
import { Toaster } from "@/components/ui/toaster";

import type { LayoutProps } from "./types";

export const Layout: FC<LayoutProps> = ({ children }) => (
    <>
        <div className="flex flex-col">
            <Header />
            <main className="grow pb-6">{children}</main>
        </div>

        <Toaster />
    </>
);
