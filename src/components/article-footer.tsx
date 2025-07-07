"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ArticleFooterProps = {
	menuItems: {
		label: string;
		href: string;
	}[];
};

export function ArticleFooter({ menuItems }: ArticleFooterProps) {
	const pathname = usePathname();

	if (pathname === "/") return null;

	const currentIndex = menuItems.findIndex(({ href }) => href === pathname);
	const previousItem = currentIndex < 1 ? null : menuItems[currentIndex - 1];
	const nextItem =
		currentIndex > menuItems.length ? null : menuItems[currentIndex + 1];

	return (
		<footer className="flex justify-between">
			<Button variant="link" disabled={!previousItem}>
				<ChevronLeft />
				<FooterLink link={previousItem} />
			</Button>
			<Button variant="link" disabled={!nextItem}>
				<FooterLink link={nextItem} />
				<ChevronRight />
			</Button>
		</footer>
	);
}

type FooterLinkProps = {
	link: {
		label: string;
		href: string;
	} | null;
};

function FooterLink({ link }: FooterLinkProps) {
	if (!link) return null;

	return (
		<Link href={link.href} className="no-underline">
			{link.label}
		</Link>
	);
}
