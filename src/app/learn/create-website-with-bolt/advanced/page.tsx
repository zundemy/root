import { AppBreadcrumb } from "@/components/app-breadcrumb";

export default function Page() {
	return (
		<div>
			<AppBreadcrumb
				items={[
					{ label: "Home", href: "/" },
					{ label: "bolt", href: "/learn/create-website-with-bolt" },
					{ label: "もっと学びたい人へ" },
				]}
			/>
			<article className="mt-12">
				<h1>もっと学びたい人へ</h1>

				<section>
					<h2>次のステップ</h2>
					<p>
						Web開発の基礎を学んだ後、さらにスキルを向上させたい方のために、
						以下のような学習リソースやトピックをご紹介します。
					</p>
				</section>

				<section>
					<h2>学習リソース</h2>

					<div>
						<h3>オンライン学習プラットフォーム</h3>
						<ul>
							<li>
								<a
									href="https://prog-8.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Progate
								</a>
								- 初心者向けのプログラミング学習サイト
							</li>
							<li>
								<a
									href="https://dotinstall.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									dotinstall
								</a>
								- 動画で学ぶプログラミング学習サイト
							</li>
							<li>
								<a
									href="https://www.udemy.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Udemy
								</a>
								- 様々なプログラミングコースが学べるプラットフォーム
							</li>
						</ul>
					</div>

					<div>
						<h3>参考書籍</h3>
						<ul>
							<li>「HTML&CSSとWebデザインが1冊できちんと身につく本」</li>
							<li>「JavaScript入門講座」</li>
							<li>「Webデザインの新しい教科書」</li>
						</ul>
					</div>
				</section>

				<section>
					<h2>学ぶべきトピック</h2>
					<div>
						<h3>フロントエンド開発</h3>
						<ul>
							<li>ReactやVue.jsなどのフロントエンドフレームワーク</li>
							<li>レスポンシブデザインの実装</li>
							<li>アクセシビリティの考慮</li>
							<li>パフォーマンス最適化</li>
						</ul>
					</div>

					<div>
						<h3>バックエンド開発</h3>
						<ul>
							<li>Node.jsやPythonなどのバックエンド言語</li>
							<li>データベース（MySQL, PostgreSQLなど）</li>
							<li>APIの設計と実装</li>
							<li>セキュリティ対策</li>
						</ul>
					</div>
				</section>

				<section>
					<h2>コミュニティ</h2>
					<p>
						プログラミングの学習は、一人で行うよりもコミュニティに参加することで
						より効率的に学ぶことができます。以下のようなコミュニティに参加してみましょう：
					</p>
					<ul>
						<li>QiitaやZennなどの技術ブログ</li>
						<li>GitHubでのオープンソースプロジェクトへの参加</li>
						<li>プログラミング勉強会やハッカソンへの参加</li>
						<li>TwitterやDiscordなどのSNSでの情報交換</li>
					</ul>
				</section>
			</article>
		</div>
	);
}
