"use client";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

type AppSidebarProps = {
	menuItems: {
		label: string;
		href: string;
	}[];
};

export function AppSidebar({ menuItems }: AppSidebarProps) {
	const pathname = usePathname();
	return (
		<Sidebar
			variant="inset"
			className="fixed top-[calc(var(--header-height)+1px)] h-[calc(100svh-var(--header-height)-var(--footer-height))]"
		>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>目次</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{menuItems.map((item, number) => (
								<SidebarMenuItem key={item.label}>
									<SidebarMenuButton asChild isActive={pathname === item.href}>
										<Link href={item.href}>
											<span className="flex h-4 w-4 shrink-0 items-center justify-center">
												{number + 1}
											</span>
											<span>{item.label}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
