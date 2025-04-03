import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader>
				<h2 className="text-lg font-semibold">Menu</h2>
			</SidebarHeader>
			<SidebarContent>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton>
							<span>Home</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
					<SidebarMenuItem>
						<SidebarMenuButton>
							<span>Users</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
					<SidebarMenuItem>
						<SidebarMenuButton>
							<span>Settings</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarContent>
		</Sidebar>
	);
}
