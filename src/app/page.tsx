import { AppFooter } from "@/components/app-footer";
import Link from "next/link";

export default function Page() {
	return (
		<div className="flex min-h-svh min-w-0 flex-1">
			<div className="flex min-w-0 flex-1 flex-col">
				<Header />
				<main className="flex h-full flex-col items-center justify-center space-y-12">
					<div className="max-w-2xl px-8 text-center">
						<h1 className="mb-6 font-light text-3xl tracking-wide">Zundemy</h1>
						<p className="mb-4 text-lg text-neutral-300 leading-relaxed">
							ずんだもん（大学1年生）とめたん先生（特任助教授 兼
							ソフトウェアエンジニア）が
							ソフトウェア業界の情報を伝えるYouTubeチャンネルです。
						</p>
						<p className="text-neutral-400">
							最新のIT・プログラミング情報やキャリアの話題を、楽しく分かりやすく発信しています。
						</p>
					</div>
					<div className="flex space-x-8">
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
						<ExternalLink text="Twitter" href="https://x.com/zundemy" />
						<ExternalLink text="GitHub" href="https://github.com/zundemy" />
					</div>
				</main>
				<AppFooter />
			</div>
		</div>
	);
}

function Header() {
	return (
		<header className="flex h-16 items-center p-4">
			<Link href="/" className="ml-4 font-bold text-md md:text-lg">
				Zundemy
			</Link>
		</header>
	);
}

type ExternalLinkProps = {
	text: string;
	href: string;
};

function ExternalLink({ text, href }: ExternalLinkProps) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="text-neutral-400 transition-colors hover:text-white"
		>
			{text}
		</a>
	);
}
