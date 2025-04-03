import Link from "next/link";

export default function EditingPage() {
	return (
		<div className="max-w-4xl mx-auto p-8">
			<h1 className="text-3xl font-bold mb-8">7. コードの直接編集</h1>

			<div className="space-y-6">
				<section>
					<h2 className="text-2xl font-semibold mb-4">HTMLの編集</h2>
					<ol className="list-decimal pl-6 space-y-4">
						<li>
							エディタでHTMLファイルを開く
							<ul className="list-disc pl-4 mt-2 text-gray-600">
								<li>通常は`index.html`または`src/index.html`</li>
								<li>ファイルツリーからファイルを選択</li>
							</ul>
						</li>
						<li>
							基本的なHTMLタグの編集
							<pre className="bg-gray-100 p-4 rounded mt-2">
								{`<h1>ようこそ</h1>
<p>これはテストページです</p>`}
							</pre>
						</li>
						<li>
							新しい要素の追加
							<pre className="bg-gray-100 p-4 rounded mt-2">
								{`<div class="container">
  <section>
    <h2>セクションタイトル</h2>
    <p>セクションの内容</p>
  </section>
</div>`}
							</pre>
						</li>
					</ol>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">CSSの編集</h2>
					<ol className="list-decimal pl-6 space-y-4">
						<li>
							CSSファイルを開く
							<ul className="list-disc pl-4 mt-2 text-gray-600">
								<li>通常は`style.css`または`src/style.css`</li>
							</ul>
						</li>
						<li>
							基本的なスタイルの追加
							<pre className="bg-gray-100 p-4 rounded mt-2">
								{`body {
  font-family: sans-serif;
  margin: 0;
  padding: 20px;
}

h1 {
  color: #333;
  font-size: 2em;
}`}
							</pre>
						</li>
						<li>
							レスポンシブデザインの追加
							<pre className="bg-gray-100 p-4 rounded mt-2">
								{`@media (max-width: 768px) {
  .container {
    padding: 10px;
  }
}`}
							</pre>
						</li>
					</ol>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">編集のコツ</h2>
					<ul className="list-disc pl-6 space-y-2">
						<li>変更を小刻みに行う</li>
						<li>変更のたびにプレビューを確認</li>
						<li>エラーが発生した場合は、エラーメッセージを確認</li>
						<li>必要に応じてAIアシスタントに質問</li>
					</ul>
				</section>

				<div className="flex justify-between mt-8">
					<Link
						href="/tutorial/commands"
						className="text-blue-500 hover:underline"
					>
						← 前の章へ
					</Link>
					<Link
						href="/tutorial/ai-images"
						className="text-blue-500 hover:underline"
					>
						次の章へ →
					</Link>
				</div>
			</div>
		</div>
	);
}
