export default function Page() {
	return (
		<div className="space-y-8">
			<h1 className="font-bold text-4xl">Webサイトを作る</h1>

			<section className="space-y-4">
				<h2 className="font-semibold text-2xl">Bolt.newを使ってみよう</h2>
				<p className="text-lg">
					Bolt.newは、AIを活用したWebサイト作成ツールです。
					プログラミングの知識がなくても、自然な言葉でWebサイトを作成することができます。
				</p>
			</section>

			<section className="space-y-4">
				<h2 className="font-semibold text-2xl">手順</h2>
				<ol className="list-decimal space-y-4 pl-6">
					<li>
						<div className="rounded-lg border border-gray-200 p-6 shadow-sm">
							<h3 className="mb-2 font-semibold text-xl">
								1. Bolt.newにアクセス
							</h3>
							<p className="text-gray-700">
								<a
									href="https://bolt.new"
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-500 hover:underline"
								>
									https://bolt.new
								</a>
								にアクセスしてください。
							</p>
						</div>
					</li>

					<li>
						<div className="rounded-lg border border-gray-200 p-6 shadow-sm">
							<h3 className="mb-2 font-semibold text-xl">2. アカウント作成</h3>
							<p className="text-gray-700">
								Googleアカウントまたはメールアドレスでアカウントを作成してください。
							</p>
						</div>
					</li>

					<li>
						<div className="rounded-lg border border-gray-200 p-6 shadow-sm">
							<h3 className="mb-2 font-semibold text-xl">
								3. サンプルプロンプトを実行
							</h3>
							<p className="text-gray-700">
								以下のプロンプトをコピーして、Bolt.newのプロンプト入力欄に貼り付けてください：
							</p>
							<pre className="mt-2 rounded bg-gray-100 p-4">
								{`シンプルでモダンなポートフォリオサイトを作成してください。
以下の要素を含めてください：
- 自己紹介
- スキル一覧
- プロジェクト紹介
- 連絡先情報

デザインは以下の条件でお願いします：
- カラーパレットは青系を基調とする
- レスポンシブデザインに対応
- アニメーション効果を適度に使用`}
							</pre>
						</div>
					</li>

					<li>
						<div className="rounded-lg border border-gray-200 p-6 shadow-sm">
							<h3 className="mb-2 font-semibold text-xl">4. カスタマイズ</h3>
							<p className="text-gray-700">
								生成されたWebサイトを自由にカスタマイズしてみましょう。
								以下のような変更が可能です：
							</p>
							<ul className="mt-2 list-disc pl-6">
								<li>色やフォントの変更</li>
								<li>コンテンツの追加・編集</li>
								<li>レイアウトの調整</li>
								<li>画像の追加</li>
							</ul>
						</div>
					</li>
				</ol>
			</section>
		</div>
	);
}
