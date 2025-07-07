import { AppFooter } from "@/components/app-footer";
import type { Metadata } from "next";

import "./globals.css";
import { AppHeader } from "@/components/app-header";

export const metadata: Metadata = {
	title: "Zundemy",
	description: "ソフトウェア開発に興味のある学生向けの学習リソースです。",
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
						<main className="flex h-full flex-col items-center justify-center space-y-12">
							{children}
						</main>
						<AppFooter />
					</div>
				</div>
			</body>
		</html>
	);
}
