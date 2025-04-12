import Link from "next/link";

export default function BoltIntroPage() {
	return (
		<div className="mx-auto max-w-4xl p-8">
			<h1 className="mb-8 font-bold text-3xl">2. Bolt.newとは</h1>

			<div className="space-y-6">
				<section>
					<h2 className="mb-4 font-semibold text-2xl">
						なぜBolt.newを使うのか
					</h2>
					<ul className="list-disc space-y-2 pl-6">
						<li>ブラウザ上で完結する開発環境</li>
						<li>AIアシスタントがコードを提案・生成</li>
						<li>リアルタイムで変更を確認可能</li>
						<li>デプロイが簡単</li>
						<li>初心者でも始めやすい</li>
					</ul>
				</section>

				<section>
					<h2 className="mb-4 font-semibold text-2xl">主な機能</h2>
					<ul className="list-disc space-y-2 pl-6">
						<li>WebContainersによる完全な開発環境</li>
						<li>チャットベースのAIアシスタント</li>
						<li>Netlifyとの統合による簡単なデプロイ</li>
						<li>Supabaseとの統合（データベース、認証、ファイルストレージ）</li>
						<li>Expoとの統合（モバイルアプリ開発）</li>
					</ul>
				</section>

				<div className="mt-8 flex justify-between">
					<Link
						href="/tutorial/introduction"
						className="text-blue-500 hover:underline"
					>
						← 前の章へ
					</Link>
					<Link
						href="/tutorial/getting-started"
						className="text-blue-500 hover:underline"
					>
						次の章へ →
					</Link>
				</div>
			</div>
		</div>
	);
}
