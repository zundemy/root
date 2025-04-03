import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { BookOpen, Code, Image, Rocket, Settings } from "lucide-react";
import Link from "next/link";

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader>
				<h2 className="text-lg font-semibold">目次</h2>
			</SidebarHeader>
			<SidebarContent>
				<SidebarMenu>
					<SidebarMenuItem>
						<Link href="/introduction" className="w-full">
							<SidebarMenuButton>
								<BookOpen className="mr-2 h-4 w-4" />
								<span>1. HTMLとCSSの紹介</span>
							</SidebarMenuButton>
						</Link>
					</SidebarMenuItem>
					<SidebarMenuItem>
						<Link href="/bolt-intro" className="w-full">
							<SidebarMenuButton>
								<Rocket className="mr-2 h-4 w-4" />
								<span>2. Bolt.newの紹介</span>
							</SidebarMenuButton>
						</Link>
					</SidebarMenuItem>
					<SidebarMenuItem>
						<Link href="/getting-started" className="w-full">
							<SidebarMenuButton>
								<Settings className="mr-2 h-4 w-4" />
								<span>3. Bolt.newの始め方</span>
							</SidebarMenuButton>
						</Link>
					</SidebarMenuItem>
					<SidebarMenuItem>
						<Link href="/first-page" className="w-full">
							<SidebarMenuButton>
								<Code className="mr-2 h-4 w-4" />
								<span>4. 最初のWebページを作成</span>
							</SidebarMenuButton>
						</Link>
					</SidebarMenuItem>
					<SidebarMenuItem>
						<Link href="/deploy" className="w-full">
							<SidebarMenuButton>
								<Rocket className="mr-2 h-4 w-4" />
								<span>5. Netlifyへのデプロイ</span>
							</SidebarMenuButton>
						</Link>
					</SidebarMenuItem>
					<SidebarMenuItem>
						<Link href="/commands" className="w-full">
							<SidebarMenuButton>
								<Code className="mr-2 h-4 w-4" />
								<span>6. 様々な指示を試してみる</span>
							</SidebarMenuButton>
						</Link>
					</SidebarMenuItem>
					<SidebarMenuItem>
						<Link href="/editing" className="w-full">
							<SidebarMenuButton>
								<Code className="mr-2 h-4 w-4" />
								<span>7. コードの直接編集</span>
							</SidebarMenuButton>
						</Link>
					</SidebarMenuItem>
					<SidebarMenuItem>
						<Link href="/ai-images" className="w-full">
							<SidebarMenuButton>
								<Image className="mr-2 h-4 w-4" />
								<span>8. AIで画像を生成して追加</span>
							</SidebarMenuButton>
						</Link>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarContent>
		</Sidebar>
	);
}
