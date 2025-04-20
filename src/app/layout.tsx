import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
	title: "Zundemy",
	description: "",
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
