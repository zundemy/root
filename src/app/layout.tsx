import type { Metadata } from "next";

import "./globals.css";

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
			<body>{children}</body>
		</html>
	);
}
