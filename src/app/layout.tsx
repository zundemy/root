import type { Metadata } from "next";
import Link from "next/link";

import "./globals.css";

export const metadata: Metadata = {
	title: "Zundemy",
	description: "ソフトウェア開発に興味のある学生向けの学習リソースです。",
	other: {
		"google-adsense-account": "ca-pub-9191403506411578",
	},
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja" className="dark bg-neutral-900">
			<body>
				<div className="flex min-h-svh min-w-0 flex-1">
					<div className="flex min-w-0 flex-1 flex-col">
						<AppHeader />
						<main className="relative h-full">{children}</main>
						<AppFooter />
					</div>
				</div>
			</body>
		</html>
	);
}

function AppHeader() {
	return (
		<header className="fixed top-0 z-50 flex h-(--header-height) w-full items-center px-5 backdrop-blur-3xl">
			<h1 className="font-bold text-xl">
				<Link href="/">Zundemy</Link>
			</h1>
		</header>
	);
}

function AppFooter() {
	return (
		<footer className="flex h-(--footer-height) items-center justify-center text-center text-xs">
			&copy; 2025 Zundemy
		</footer>
	);
}
