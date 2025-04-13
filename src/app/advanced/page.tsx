export default function Page() {
	return (
		<div className="space-y-8">
			<h1 className="font-bold text-4xl">もっと学びたい人へ</h1>

			<section className="space-y-4">
				<h2 className="font-semibold text-2xl">次のステップ</h2>
				<p className="text-lg">
					Web開発の基礎を学んだ後、さらにスキルを向上させたい方のために、
					以下のような学習リソースやトピックをご紹介します。
				</p>
			</section>

			<section className="space-y-4">
				<h2 className="font-semibold text-2xl">学習リソース</h2>

				<div className="rounded-lg border border-gray-200 p-6 shadow-sm">
					<h3 className="mb-2 font-semibold text-xl">
						オンライン学習プラットフォーム
					</h3>
					<ul className="list-disc space-y-2 pl-6">
						<li>
							<a
								href="https://prog-8.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500 hover:underline"
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
								className="text-blue-500 hover:underline"
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
								className="text-blue-500 hover:underline"
							>
								Udemy
							</a>
							- 様々なプログラミングコースが学べるプラットフォーム
						</li>
					</ul>
				</div>

				<div className="rounded-lg border border-gray-200 p-6 shadow-sm">
					<h3 className="mb-2 font-semibold text-xl">参考書籍</h3>
					<ul className="list-disc space-y-2 pl-6">
						<li>「HTML&CSSとWebデザインが1冊できちんと身につく本」</li>
						<li>「JavaScript入門講座」</li>
						<li>「Webデザインの新しい教科書」</li>
					</ul>
				</div>
			</section>

			<section className="space-y-4">
				<h2 className="font-semibold text-2xl">学ぶべきトピック</h2>
				<div className="rounded-lg border border-gray-200 p-6 shadow-sm">
					<h3 className="mb-2 font-semibold text-xl">フロントエンド開発</h3>
					<ul className="list-disc space-y-2 pl-6">
						<li>ReactやVue.jsなどのフロントエンドフレームワーク</li>
						<li>レスポンシブデザインの実装</li>
						<li>アクセシビリティの考慮</li>
						<li>パフォーマンス最適化</li>
					</ul>
				</div>

				<div className="rounded-lg border border-gray-200 p-6 shadow-sm">
					<h3 className="mb-2 font-semibold text-xl">バックエンド開発</h3>
					<ul className="list-disc space-y-2 pl-6">
						<li>Node.jsやPythonなどのバックエンド言語</li>
						<li>データベース（MySQL, PostgreSQLなど）</li>
						<li>APIの設計と実装</li>
						<li>セキュリティ対策</li>
					</ul>
				</div>
			</section>

			<section className="space-y-4">
				<h2 className="font-semibold text-2xl">コミュニティ</h2>
				<p className="text-lg">
					プログラミングの学習は、一人で行うよりもコミュニティに参加することで
					より効率的に学ぶことができます。以下のようなコミュニティに参加してみましょう：
				</p>
				<ul className="list-disc space-y-2 pl-6">
					<li>QiitaやZennなどの技術ブログ</li>
					<li>GitHubでのオープンソースプロジェクトへの参加</li>
					<li>プログラミング勉強会やハッカソンへの参加</li>
					<li>TwitterやDiscordなどのSNSでの情報交換</li>
				</ul>
			</section>
		</div>
	);
}
