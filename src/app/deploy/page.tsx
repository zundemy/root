import Link from "next/link";

export default function DeployPage() {
	return (
		<div className="max-w-4xl mx-auto p-8">
			<h1 className="text-3xl font-bold mb-8">5. Netlifyへのデプロイ</h1>

			<div className="space-y-6">
				<section>
					<h2 className="text-2xl font-semibold mb-4">デプロイ手順</h2>
					<ol className="list-decimal pl-6 space-y-4">
						<li>プロジェクト画面で「Deploy」ボタンをクリック</li>
						<li>
							Netlifyアカウントでログイン
							<ul className="list-disc pl-4 mt-2 text-gray-600">
								<li>
									Netlifyアカウントをお持ちでない場合は、新規作成が必要です
								</li>
								<li>Googleアカウントでログインすることも可能です</li>
							</ul>
						</li>
						<li>
							デプロイ設定を確認
							<ul className="list-disc pl-4 mt-2 text-gray-600">
								<li>プロジェクト名を設定</li>
								<li>デプロイ先のブランチを選択</li>
								<li>ビルド設定を確認</li>
							</ul>
						</li>
						<li>「Deploy」ボタンをクリック</li>
						<li>
							デプロイ完了後、URLを確認
							<ul className="list-disc pl-4 mt-2 text-gray-600">
								<li>自動的に生成されたURLでサイトにアクセス可能</li>
								<li>カスタムドメインの設定も可能</li>
							</ul>
						</li>
					</ol>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">注意点</h2>
					<ul className="list-disc pl-6 space-y-2">
						<li>デプロイには数分かかる場合があります</li>
						<li>デプロイ後もコードの変更は可能です</li>
						<li>変更を加えた場合は、再度デプロイが必要です</li>
					</ul>
				</section>

				<div className="flex justify-between mt-8">
					<Link
						href="/tutorial/first-page"
						className="text-blue-500 hover:underline"
					>
						← 前の章へ
					</Link>
					<Link
						href="/tutorial/commands"
						className="text-blue-500 hover:underline"
					>
						次の章へ →
					</Link>
				</div>
			</div>
		</div>
	);
}
