import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";

type AppBreadcrumbProps = {
	items: {
		label: string;
		href?: string;
	}[];
};

export function AppBreadcrumb({ items }: AppBreadcrumbProps) {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				{items.map((item, index) => (
					<Fragment key={item.label}>
						{index !== 0 && <BreadcrumbSeparator />}
						<BreadcrumbItem>
							{item.href ? (
								<BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
							) : (
								<BreadcrumbPage>{item.label}</BreadcrumbPage>
							)}
						</BreadcrumbItem>
					</Fragment>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	);
}
