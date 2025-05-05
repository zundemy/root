import { AppFooter } from "@/components/app-footer";
import { Button } from "@/components/ui/button";

export default function Page() {
	return (
		<div className="flex min-h-svh min-w-0 flex-1">
			<div className="flex min-w-0 flex-1 flex-col">
				<main className="flex h-full flex-col items-center justify-center space-y-12">
					<div className="max-w-3xl px-8 text-center">
						<h1 className="mb-4 text-3xl">Zundemy</h1>
						<p>
							ずんだもん（大学1年生）とめたん先生（特任助教授 兼
							ソフトウェアエンジニア）が
						</p>
						<p>ソフトウェア業界の情報を伝えるYouTubeチャンネルです。</p>
					</div>
					<div className="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
						<ExternalLink
							text="YouTube"
							href="https://www.youtube.com/@zundemy"
						/>
						<ExternalLink
							text="Instagram"
							href="https://www.instagram.com/zundemy/"
						/>
						<ExternalLink
							text="TikTok"
							href="https://www.tiktok.com/@zundemy"
						/>
						<ExternalLink text="X" href="https://x.com/zundemy" />
						<ExternalLink text="GitHub" href="https://github.com/zundemy" />
						<ExternalLink
							text="yourware"
							href="https://www.yourware.so/profile/MWXbAFZy2pcNN5JBZIVXotJNWRH2"
						/>
					</div>
				</main>
				<AppFooter />
			</div>
		</div>
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
