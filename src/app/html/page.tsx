export default function Page() {
	return (
		<div className="space-y-8">
			<h1 className="font-bold text-4xl">HTMLを編集する</h1>

			<section className="space-y-4">
				<h2 className="font-semibold text-2xl">HTMLとは</h2>
				<p className="text-lg">
					HTML（HyperText Markup
					Language）は、Webページの構造を定義するための言語です。
					タグと呼ばれる要素を使って、テキストや画像などのコンテンツを配置します。
				</p>
			</section>

			<section className="space-y-4">
				<h2 className="font-semibold text-2xl">基本的なHTMLタグ</h2>

				<div className="rounded-lg border border-gray-200 p-6 shadow-sm">
					<h3 className="mb-2 font-semibold text-xl">aタグ（リンク）</h3>
					<p className="text-gray-700">
						他のページやWebサイトへのリンクを作成します。
					</p>
					<pre className="mt-2 rounded bg-gray-100 p-4">
						{`<a href="https://example.com">リンクテキスト</a>`}
					</pre>
					<p className="mt-2">
						例：
						<a
							href="https://example.com"
							className="text-blue-500 hover:underline"
						>
							リンクテキスト
						</a>
					</p>
				</div>

				<div className="rounded-lg border border-gray-200 p-6 shadow-sm">
					<h3 className="mb-2 font-semibold text-xl">imgタグ（画像）</h3>
					<p className="text-gray-700">画像を表示します。</p>
					<pre className="mt-2 rounded bg-gray-100 p-4">
						{`<img src="画像のURL" alt="代替テキスト">`}
					</pre>
					<p className="mt-2">
						例：
						<img
							src="https://via.placeholder.com/150"
							alt="サンプル画像"
							className="mt-2"
						/>
					</p>
				</div>

				<div className="rounded-lg border border-gray-200 p-6 shadow-sm">
					<h3 className="mb-2 font-semibold text-xl">
						inputタグ（入力フォーム）
					</h3>
					<p className="text-gray-700">
						ユーザーからの入力を受け取るフォームを作成します。
					</p>
					<pre className="mt-2 rounded bg-gray-100 p-4">
						{`<input type="text" placeholder="テキストを入力">`}
					</pre>
					<p className="mt-2">
						例：
						<input
							type="text"
							placeholder="テキストを入力"
							className="rounded border p-2"
						/>
					</p>
				</div>
			</section>

			<section className="space-y-4">
				<h2 className="font-semibold text-2xl">参考資料</h2>
				<p className="text-lg">
					HTMLについてもっと詳しく知りたい方は、以下のMDN Web
					Docsを参考にしてください：
				</p>
				<a
					href="https://developer.mozilla.org/ja/docs/Web/HTML/Reference"
					target="_blank"
					rel="noopener noreferrer"
					className="mt-2 block text-blue-500 hover:underline"
				>
					MDN Web Docs - HTML リファレンス
				</a>
			</section>
		</div>
	);
}
