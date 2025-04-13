import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";

export function AppHeader() {
	return (
		<header className="flex h-16 items-center p-4">
			<SidebarTrigger />
			<Link href="/" className="ml-4 font-bold text-lg md:text-2xl">
				コンピューターリテラシー 2025
			</Link>
		</header>
	);
}
