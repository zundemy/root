// import { AppFooter } from "@/components/app-footer";
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

const menuItems = [
	{
		label: "やること",
		url: "/create-website-with-bolt/introduction",
		// 最終課題の要件
		// 最終課題のサンプルを提示
		// 使用するツールの説明 (Bolt.new)
	},
	{
		label: "Webサイトを作る",
		url: "/create-website-with-bolt/create",
		// https://bolt.new/ にアクセス
		// アカウント作成
		// サンプルのプロンプトをコピペで実行
		// 自由にカスタマイズしてみる
	},
	{
		label: "Webサイトを公開する",
		url: "/create-website-with-bolt/publish",
		// https://bolt.new/ にアクセス
		// アカウント作成
		// サンプルのプロンプトをコピペで実行
		// 自由にカスタマイズしてみる
	},
	{
		label: "HTMLを編集する",
		url: "/create-website-with-bolt/html",
		// htmlの構造を説明
		// aタグ
		// imgタグ
		// inputタグ
		// mdn web docsを紹介する https://developer.mozilla.org/ja/docs/Web/HTML/Reference
	},
	{
		label: "CSSを編集する",
		url: "/create-website-with-bolt/css",
		// cssの構造を説明
		// background-colorを変えてみる
		// mdn web docsを紹介する https://developer.mozilla.org/ja/docs/Web/CSS/Reference
	},
	{
		label: "JavaScriptを編集する",
		url: "/create-website-with-bolt/javascript",
		// JavaScriptの構造を説明
		// mdn web docsを紹介する https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference
	},
	{
		label: "もっと学びたい人へ",
		url: "/create-website-with-bolt/advanced",
	},
];

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
					<Header />
					<main className="prose prose-neutral prose-sm dark:prose-invert mx-auto w-full max-w-4xl flex-1 space-y-8 p-8 prose-pre:py-4 prose-pre:text-sm">
						{children}
						<ArticleFooter menuItems={menuItems} />
					</main>
					<AppFooter />
				</div>
			</div>
		</SidebarProvider>
	);
}

function Header() {
	return (
		<header className="flex h-16 items-center p-4">
			<SidebarTrigger />
			<Link
				href="/create-website-with-bolt"
				className="ml-4 font-bold text-md md:text-lg"
			>
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
