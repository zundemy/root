import { Button } from "@/components/ui/button";

export default function Page() {
	return (
		<main className="flex h-full flex-col items-center justify-center space-y-12">
			<div className="max-w-3xl px-8 text-center">
				<p>ソフトウェアエンジニアを目指す大学生向けに情報発信をしています。</p>
			</div>
			<div className="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
				{socialMediaLinks.map((socialMediaLink) => (
					<ExternalLink key={socialMediaLink.text} {...socialMediaLink} />
				))}
			</div>
		</main>
	);
}

type ExternalLinkProps = {
	text: string;
	href: string;
};

function ExternalLink({ text, href }: ExternalLinkProps) {
	return (
		<Button variant="link" asChild>
			<a href={href} target="_blank" rel="noopener noreferrer">
				{text}
			</a>
		</Button>
	);
}

const socialMediaLinks = [
	{
		text: "YouTube",
		href: "https://www.youtube.com/@zundemy",
	},
	{
		text: "Instagram",
		href: "https://www.instagram.com/zundemy/",
	},
	{
		text: "TikTok",
		href: "https://www.tiktok.com/@zundemy",
	},
	{
		text: "X",
		href: "https://x.com/zundemy",
	},
	{
		text: "GitHub",
		href: "https://github.com/zundemy",
	},
];
