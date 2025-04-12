import Link from "next/link";

export default function AIImagesPage() {
	return (
		<div className="mx-auto max-w-4xl p-8">
			<h1 className="mb-8 font-bold text-3xl">8. AIで画像を生成して追加</h1>

			<div className="space-y-6">
				<section>
					<h2 className="mb-4 font-semibold text-2xl">画像生成の手順</h2>
					<ol className="list-decimal space-y-4 pl-6">
						<li>
							プロンプトの作成
							<ul className="mt-2 list-disc pl-4 text-gray-600">
								<li>必要な画像の詳細を具体的に記述</li>
								<li>サイズやスタイルを指定</li>
							</ul>
						</li>
						<li>
							プロンプトの例：
							<pre className="mt-2 rounded bg-gray-100 p-4">
								ヘッダー用の画像を生成してください。サイズは1200x400pxで、モダンなデザインの画像を生成してください。
							</pre>
						</li>
						<li>
							生成された画像の確認
							<ul className="mt-2 list-disc pl-4 text-gray-600">
								<li>画像の品質を確認</li>
								<li>必要に応じて再生成</li>
							</ul>
						</li>
					</ol>
				</section>

				<section>
					<h2 className="mb-4 font-semibold text-2xl">画像の実装</h2>
					<ol className="list-decimal space-y-4 pl-6">
						<li>
							画像のダウンロード
							<ul className="mt-2 list-disc pl-4 text-gray-600">
								<li>生成された画像をダウンロード</li>
								<li>プロジェクトの適切なディレクトリに保存</li>
							</ul>
						</li>
						<li>
							HTMLでの実装
							<pre className="mt-2 rounded bg-gray-100 p-4">
								&lt;img src="images/header.jpg" alt="ヘッダー画像"&gt;
							</pre>
						</li>
						<li>
							CSSでのスタイリング
							<pre className="mt-2 rounded bg-gray-100 p-4">
								img &#123; width: 100%; height: auto; object-fit: cover; &#125;
							</pre>
						</li>
					</ol>
				</section>

				<section>
					<h2 className="mb-4 font-semibold text-2xl">プロンプト作成のコツ</h2>
					<ul className="list-disc space-y-2 pl-6">
						<li>具体的なサイズを指定する</li>
						<li>スタイルや雰囲気を詳細に記述する</li>
						<li>必要に応じて修正を加える</li>
						<li>複数のバリエーションを試す</li>
					</ul>
				</section>

				<div className="mt-8 flex justify-between">
					<Link
						href="/tutorial/editing"
						className="text-blue-500 hover:underline"
					>
						← 前の章へ
					</Link>
					<Link href="/tutorial" className="text-blue-500 hover:underline">
						目次に戻る
					</Link>
				</div>
			</div>
		</div>
	);
}
