import { AppFooter } from "@/components/app-footer";
import Link from "next/link";

export default function Page() {
	return (
		<div className="flex min-h-svh min-w-0 flex-1">
			<div className="flex min-w-0 flex-1 flex-col">
				<Header />
				<main className="flex h-full items-center justify-center">root</main>
				<AppFooter />
			</div>
		</div>
	);
}

function Header() {
	return (
		<header className="flex h-16 items-center p-4">
			<Link href="/" className="ml-4 font-bold text-md md:text-lg">
				Zundemy
			</Link>
		</header>
	);
}
