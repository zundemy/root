import { AppSidebar } from "@/components/app-sidebar";
import { ArticleFooter } from "@/components/article-footer";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "boltでWebサイトを作ってみよう",
	description:
		"生成AIツールBolt.newを使用してwebサイトを作成してみるチュートリアルです。",
};

export default async function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<SidebarProvider>
			<div className="flex min-h-svh min-w-0 flex-1">
				<AppSidebar menuItems={menuItems} />
				<div className="flex min-w-0 flex-1 flex-col">
					<AppHeader />
					<main className="prose prose-neutral prose-sm dark:prose-invert mx-auto w-full max-w-4xl flex-1 p-8 prose-pre:py-4 prose-pre:text-sm">
						{children}
						<div className="pt-8">
							<ArticleFooter menuItems={menuItems} />
						</div>
					</main>
					<AppFooter />
				</div>
			</div>
		</SidebarProvider>
	);
}

function AppHeader() {
	return (
		<header className="flex h-16 items-center p-4">
			<SidebarTrigger />
			<Link href="/" className="ml-4 font-bold text-md md:text-lg">
				Zundemy
			</Link>
		</header>
	);
}

function AppFooter() {
	return (
		<footer className="py-10 text-center text-xs">&copy; 2025 Zundemy</footer>
	);
}

const menuItems = [
	{
		label: "やること",
		href: "/create-website-with-bolt/introduction",
	},
	{
		label: "Webサイトを作る",
		href: "/create-website-with-bolt/create",
	},
	{
		label: "Webサイトを公開する",
		href: "/create-website-with-bolt/publish",
	},
	{
		label: "HTMLを編集する",
		href: "/create-website-with-bolt/html",
	},
	{
		label: "CSSを編集する",
		href: "/create-website-with-bolt/css",
	},
	{
		label: "JavaScriptを編集する",
		href: "/create-website-with-bolt/javascript",
	},
	{
		label: "もっと学びたい人へ",
		href: "/create-website-with-bolt/advanced",
	},
];
