import Link from "next/link";

export default function AIImagesPage() {
	return (
		<div className="max-w-4xl mx-auto p-8">
			<h1 className="text-3xl font-bold mb-8">8. AIで画像を生成して追加</h1>

			<div className="space-y-6">
				<section>
					<h2 className="text-2xl font-semibold mb-4">画像生成の手順</h2>
					<ol className="list-decimal pl-6 space-y-4">
						<li>
							プロンプトの作成
							<ul className="list-disc pl-4 mt-2 text-gray-600">
								<li>必要な画像の詳細を具体的に記述</li>
								<li>サイズやスタイルを指定</li>
							</ul>
						</li>
						<li>
							プロンプトの例：
							<pre className="bg-gray-100 p-4 rounded mt-2">
								ヘッダー用の画像を生成してください。サイズは1200x400pxで、モダンなデザインの画像を生成してください。
							</pre>
						</li>
						<li>
							生成された画像の確認
							<ul className="list-disc pl-4 mt-2 text-gray-600">
								<li>画像の品質を確認</li>
								<li>必要に応じて再生成</li>
							</ul>
						</li>
					</ol>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">画像の実装</h2>
					<ol className="list-decimal pl-6 space-y-4">
						<li>
							画像のダウンロード
							<ul className="list-disc pl-4 mt-2 text-gray-600">
								<li>生成された画像をダウンロード</li>
								<li>プロジェクトの適切なディレクトリに保存</li>
							</ul>
						</li>
						<li>
							HTMLでの実装
							<pre className="bg-gray-100 p-4 rounded mt-2">
								&lt;img src="images/header.jpg" alt="ヘッダー画像"&gt;
							</pre>
						</li>
						<li>
							CSSでのスタイリング
							<pre className="bg-gray-100 p-4 rounded mt-2">
								img &#123; width: 100%; height: auto; object-fit: cover; &#125;
							</pre>
						</li>
					</ol>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">プロンプト作成のコツ</h2>
					<ul className="list-disc pl-6 space-y-2">
						<li>具体的なサイズを指定する</li>
						<li>スタイルや雰囲気を詳細に記述する</li>
						<li>必要に応じて修正を加える</li>
						<li>複数のバリエーションを試す</li>
					</ul>
				</section>

				<div className="flex justify-between mt-8">
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
