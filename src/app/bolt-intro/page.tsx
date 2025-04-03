import Link from "next/link";

export default function BoltIntroPage() {
	return (
		<div className="max-w-4xl mx-auto p-8">
			<h1 className="text-3xl font-bold mb-8">2. Bolt.newとは</h1>

			<div className="space-y-6">
				<section>
					<h2 className="text-2xl font-semibold mb-4">
						なぜBolt.newを使うのか
					</h2>
					<ul className="list-disc pl-6 space-y-2">
						<li>ブラウザ上で完結する開発環境</li>
						<li>AIアシスタントがコードを提案・生成</li>
						<li>リアルタイムで変更を確認可能</li>
						<li>デプロイが簡単</li>
						<li>初心者でも始めやすい</li>
					</ul>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">主な機能</h2>
					<ul className="list-disc pl-6 space-y-2">
						<li>WebContainersによる完全な開発環境</li>
						<li>チャットベースのAIアシスタント</li>
						<li>Netlifyとの統合による簡単なデプロイ</li>
						<li>Supabaseとの統合（データベース、認証、ファイルストレージ）</li>
						<li>Expoとの統合（モバイルアプリ開発）</li>
					</ul>
				</section>

				<div className="flex justify-between mt-8">
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
