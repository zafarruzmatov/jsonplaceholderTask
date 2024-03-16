import { Logo } from "./Logo";
import { ModeToggle } from "@/components";

export const Header = () => (
    <header className="container flex items-center justify-between py-2">
        <Logo />
        <ModeToggle />
    </header>
);
