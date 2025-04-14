"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ArticleFooterProps = {
	menuItems: {
		label: string;
		url: string;
	}[];
};

export function ArticleFooter({ menuItems }: ArticleFooterProps) {
	const pathname = usePathname();

	if (pathname === "/") return null;

	const currentIndex = menuItems.findIndex((item) => item.url === pathname);
	const previousItem = currentIndex === 0 ? null : menuItems[currentIndex - 1];
	const nextItem =
		currentIndex === menuItems.length - 1 ? null : menuItems[currentIndex + 1];

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
		url: string;
	} | null;
};

function FooterLink({ link }: FooterLinkProps) {
	if (!link) return null;

	return (
		<Link href={link.url} className="no-underline">
			{link.label}
		</Link>
	);
}
