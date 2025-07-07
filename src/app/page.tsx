import { LinkAsButton } from "@/components/link-as-button";

export default function Page() {
	return (
		<div className="flex min-h-svh min-w-0 flex-1">
			<div className="flex min-w-0 flex-1 flex-col">
				<AppHeader />
				<main className="h-full">
					<div className="mx-auto max-w-3xl space-y-10 p-5">
						<section>
							<p>
								ソフトウェアエンジニアを目指す大学生向けに情報発信をしています。
							</p>
						</section>

						<section>
							<h2 className="text-xl">Learn</h2>
							<LinkAsButton href="create-website-with-bolt">
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
				</main>
				<AppFooter />
			</div>
		</div>
	);
}

function AppHeader() {
	return (
		<header className="px-5 py-3">
			<h1 className="font-bold text-xl">Zundemy</h1>
		</header>
	);
}

function AppFooter() {
	return (
		<footer className="py-10 text-center text-xs">&copy; 2025 Zundemy</footer>
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
