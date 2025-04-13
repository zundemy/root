export default function Page() {
	return (
		<div>
			<h1 className="mb-8 font-bold text-3xl">3. Bolt.newの始め方</h1>

			<div className="space-y-6">
				<section>
					<h2 className="mb-4 font-semibold text-2xl">アカウント作成手順</h2>
					<ol className="list-decimal space-y-4 pl-6">
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
							<ul className="mt-2 list-disc pl-4 text-gray-600">
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
					<h2 className="mb-4 font-semibold text-2xl">注意点</h2>
					<ul className="list-disc space-y-2 pl-6">
						<li>Googleアカウントは必須です</li>
						<li>ブラウザは最新版を使用することを推奨します</li>
						<li>インターネット接続が必要です</li>
					</ul>
				</section>
			</div>
		</div>
	);
}
