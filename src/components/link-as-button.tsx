import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";

type LinkAsButtonProps = {
	children: ReactNode;
	href: string;
	external?: boolean;
};

export function LinkAsButton({
	children,
	href,
	external = false,
}: LinkAsButtonProps) {
	return (
		<Button variant="link" size="sm" asChild>
			{external ? (
				<a href={href} target="_blank" rel="noopener noreferrer">
					{children}
				</a>
			) : (
				<Link href={href}>{children}</Link>
			)}
		</Button>
	);
}
