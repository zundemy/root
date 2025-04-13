export default function Page() {
	return (
		<div className="space-y-8">
			<h1 className="font-bold text-4xl">CSSを編集する</h1>

			<section className="space-y-4">
				<h2 className="font-semibold text-2xl">CSSとは</h2>
				<p className="text-lg">
					CSS（Cascading Style
					Sheets）は、Webページの見た目を装飾するための言語です。
					HTMLで作成した要素の色、サイズ、レイアウトなどを指定することができます。
				</p>
			</section>

			<section className="space-y-4">
				<h2 className="font-semibold text-2xl">基本的なCSSプロパティ</h2>

				<div className="rounded-lg border border-gray-200 p-6 shadow-sm">
					<h3 className="mb-2 font-semibold text-xl">
						background-color（背景色）
					</h3>
					<p className="text-gray-700">要素の背景色を変更します。</p>
					<pre className="mt-2 rounded bg-gray-100 p-4">
						{`.example {
  background-color: #f0f0f0;
}`}
					</pre>
					<div className="mt-2 rounded bg-gray-100 p-4">
						この要素の背景色は灰色です。
					</div>
				</div>

				<div className="rounded-lg border border-gray-200 p-6 shadow-sm">
					<h3 className="mb-2 font-semibold text-xl">color（文字色）</h3>
					<p className="text-gray-700">テキストの色を変更します。</p>
					<pre className="mt-2 rounded bg-gray-100 p-4">
						{`.example {
  color: #ff0000;
}`}
					</pre>
					<p className="mt-2 text-red-500">このテキストは赤色です。</p>
				</div>

				<div className="rounded-lg border border-gray-200 p-6 shadow-sm">
					<h3 className="mb-2 font-semibold text-xl">
						font-size（文字サイズ）
					</h3>
					<p className="text-gray-700">テキストのサイズを変更します。</p>
					<pre className="mt-2 rounded bg-gray-100 p-4">
						{`.example {
  font-size: 20px;
}`}
					</pre>
					<p className="mt-2 text-xl">このテキストは大きいサイズです。</p>
				</div>
			</section>

			<section className="space-y-4">
				<h2 className="font-semibold text-2xl">参考資料</h2>
				<p className="text-lg">
					CSSについてもっと詳しく知りたい方は、以下のMDN Web
					Docsを参考にしてください：
				</p>
				<a
					href="https://developer.mozilla.org/ja/docs/Web/CSS/Reference"
					target="_blank"
					rel="noopener noreferrer"
					className="mt-2 block text-blue-500 hover:underline"
				>
					MDN Web Docs - CSS リファレンス
				</a>
			</section>
		</div>
	);
}
