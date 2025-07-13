import { AppSidebar } from "@/components/app-sidebar";
import { ArticleFooter } from "@/components/article-footer";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { indexItems } from "./index-items";

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
				<AppSidebar indexItems={indexItems} />
				<div className="mt-(--header-height) mb-(--footer-height) flex min-w-0 flex-1 flex-col">
					<main className="mx-auto w-full max-w-4xl flex-1 p-8">
						{children}
						<div className="pt-8">
							<ArticleFooter indexItems={indexItems} />
						</div>
					</main>
				</div>
			</div>
		</SidebarProvider>
	);
}
