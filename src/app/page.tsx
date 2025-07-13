import { LinkAsButton } from "@/components/link-as-button";

export default function Page() {
	return (
		<div className="mx-auto max-w-3xl space-y-10 p-5">
			<section>
				<p>ソフトウェアエンジニアを目指す大学生向けに情報発信をしています。</p>
			</section>

			<section>
				<h2 className="text-xl">Learn</h2>
				<LinkAsButton href="/learn/create-website-with-bolt">
					boltでWebサイトを作ってみよう
				</LinkAsButton>
			</section>

			<section>
				<h2 className="text-xl">Social Media</h2>
				<div className="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
					{socialMediaLinks.map(({ label, href }) => (
						<LinkAsButton key={label} href={href}>
							{label}
						</LinkAsButton>
					))}
				</div>
			</section>
		</div>
	);
}

const socialMediaLinks = [
	{
		label: "YouTube",
		href: "https://www.youtube.com/@zundemy",
	},
	{
		label: "Instagram",
		href: "https://www.instagram.com/zundemy/",
	},
	{
		label: "TikTok",
		href: "https://www.tiktok.com/@zundemy",
	},
	{
		label: "X",
		href: "https://x.com/zundemy",
	},
	{
		label: "GitHub",
		href: "https://github.com/zundemy",
	},
];
