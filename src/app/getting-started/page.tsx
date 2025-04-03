import Link from "next/link";

export default function GettingStartedPage() {
	return (
		<div className="max-w-4xl mx-auto p-8">
			<h1 className="text-3xl font-bold mb-8">3. Bolt.newの始め方</h1>

			<div className="space-y-6">
				<section>
					<h2 className="text-2xl font-semibold mb-4">アカウント作成手順</h2>
					<ol className="list-decimal pl-6 space-y-4">
						<li>
							<a
								href="https://bolt.new"
								className="text-blue-500 hover:underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								Bolt.new
							</a>
							にアクセス
						</li>
						<li>「Get Started」ボタンをクリック</li>
						<li>
							Googleアカウントでサインアップ
							<ul className="list-disc pl-4 mt-2 text-gray-600">
								<li>
									Googleアカウントをお持ちでない場合は、新規作成が必要です
								</li>
								<li>Googleアカウントの作成は無料です</li>
							</ul>
						</li>
						<li>プロジェクト作成画面へ進む</li>
					</ol>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">注意点</h2>
					<ul className="list-disc pl-6 space-y-2">
						<li>Googleアカウントは必須です</li>
						<li>ブラウザは最新版を使用することを推奨します</li>
						<li>インターネット接続が必要です</li>
					</ul>
				</section>

				<div className="flex justify-between mt-8">
					<Link
						href="/tutorial/bolt-intro"
						className="text-blue-500 hover:underline"
					>
						← 前の章へ
					</Link>
					<Link
						href="/tutorial/first-page"
						className="text-blue-500 hover:underline"
					>
						次の章へ →
					</Link>
				</div>
			</div>
		</div>
	);
}
