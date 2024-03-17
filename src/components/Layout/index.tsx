import { FC } from "react";
import { Header } from "@/components";

import type { LayoutProps } from "./types";

export const Layout: FC<LayoutProps> = ({ children }) => (
    <div className="flex flex-col">
        <Header />
        <main className="grow">{children}</main>
    </div>
);
