"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ArticleFooterProps = {
	indexItems: {
		label: string;
		href: string;
	}[];
};

export function ArticleFooter({ indexItems }: ArticleFooterProps) {
	const pathname = usePathname();

	if (pathname === "/") return null;

	const currentIndex = indexItems.findIndex(({ href }) => href === pathname);
	const previousItem = currentIndex < 1 ? null : indexItems[currentIndex - 1];
	const nextItem =
		currentIndex > indexItems.length ? null : indexItems[currentIndex + 1];

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
