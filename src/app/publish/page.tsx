export default function Page() {
	return (
		<div className="space-y-8">
			<h1 className="font-bold text-4xl">Webサイトを公開する</h1>

			<section className="space-y-4">
				<h2 className="font-semibold text-2xl">Webサイトの公開方法</h2>
				<p className="text-lg">
					Bolt.newで作成したWebサイトを公開する方法について説明します。
					以下の手順に従って、自分のWebサイトを世界中の人々が見られるようにしましょう。
				</p>
			</section>

			<section className="space-y-4">
				<h2 className="font-semibold text-2xl">公開手順</h2>

				<div className="rounded-lg border border-gray-200 p-6 shadow-sm">
					<h3 className="mb-2 font-semibold text-xl">
						1. Bolt.newでプロジェクトを開く
					</h3>
					<p>
						公開したいWebサイトのプロジェクトをBolt.newで開きます。
						ログインして、自分のプロジェクト一覧から選択してください。
					</p>
				</div>

				<div className="rounded-lg border border-gray-200 p-6 shadow-sm">
					<h3 className="mb-2 font-semibold text-xl">2. 公開設定を行う</h3>
					<p>プロジェクトの設定画面で、以下の項目を確認・設定します：</p>
					<ul className="mt-2 list-disc pl-6">
						<li>ドメイン名の設定（必要に応じて）</li>
						<li>SEO設定（検索エンジン最適化）</li>
						<li>アクセス制限の設定（必要に応じて）</li>
					</ul>
				</div>

				<div className="rounded-lg border border-gray-200 p-6 shadow-sm">
					<h3 className="mb-2 font-semibold text-xl">
						3. 公開ボタンをクリック
					</h3>
					<p>
						設定が完了したら、公開ボタンをクリックします。
						Bolt.newが自動的にWebサイトを公開し、公開用のURLを生成します。
					</p>
				</div>

				<div className="rounded-lg border border-gray-200 p-6 shadow-sm">
					<h3 className="mb-2 font-semibold text-xl">4. 公開後の確認</h3>
					<p>公開後は、以下の点を確認しましょう：</p>
					<ul className="mt-2 list-disc pl-6">
						<li>Webサイトが正しく表示されるか</li>
						<li>リンクが正常に機能するか</li>
						<li>画像が正しく表示されるか</li>
						<li>モバイル表示が適切か</li>
					</ul>
				</div>
			</section>

			<section className="space-y-4">
				<h2 className="font-semibold text-2xl">注意点</h2>
				<div className="rounded-lg border border-gray-200 p-6 shadow-sm">
					<h3 className="mb-2 font-semibold text-xl">公開時の注意事項</h3>
					<ul className="list-disc space-y-2 pl-6">
						<li>個人情報や機密情報が含まれていないか確認する</li>
						<li>
							著作権に問題のある画像やコンテンツを使用していないか確認する
						</li>
						<li>Webサイトの内容が適切か確認する</li>
						<li>定期的にバックアップを取る</li>
					</ul>
				</div>
			</section>

			<section className="space-y-4">
				<h2 className="font-semibold text-2xl">トラブルシューティング</h2>
				<p className="text-lg">
					公開後に問題が発生した場合は、以下の点を確認してください：
				</p>
				<ul className="list-disc space-y-2 pl-6">
					<li>インターネット接続が正常か</li>
					<li>ブラウザのキャッシュをクリアする</li>
					<li>Bolt.newのサポートに問い合わせる</li>
				</ul>
			</section>
		</div>
	);
}
