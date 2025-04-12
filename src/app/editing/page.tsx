import Link from "next/link";

export default function EditingPage() {
	return (
		<div className="mx-auto max-w-4xl p-8">
			<h1 className="mb-8 font-bold text-3xl">7. コードの直接編集</h1>

			<div className="space-y-6">
				<section>
					<h2 className="mb-4 font-semibold text-2xl">HTMLの編集</h2>
					<ol className="list-decimal space-y-4 pl-6">
						<li>
							エディタでHTMLファイルを開く
							<ul className="mt-2 list-disc pl-4 text-gray-600">
								<li>通常は`index.html`または`src/index.html`</li>
								<li>ファイルツリーからファイルを選択</li>
							</ul>
						</li>
						<li>
							基本的なHTMLタグの編集
							<pre className="mt-2 rounded bg-gray-100 p-4">
								{`<h1>ようこそ</h1>
<p>これはテストページです</p>`}
							</pre>
						</li>
						<li>
							新しい要素の追加
							<pre className="mt-2 rounded bg-gray-100 p-4">
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
					<h2 className="mb-4 font-semibold text-2xl">CSSの編集</h2>
					<ol className="list-decimal space-y-4 pl-6">
						<li>
							CSSファイルを開く
							<ul className="mt-2 list-disc pl-4 text-gray-600">
								<li>通常は`style.css`または`src/style.css`</li>
							</ul>
						</li>
						<li>
							基本的なスタイルの追加
							<pre className="mt-2 rounded bg-gray-100 p-4">
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
							<pre className="mt-2 rounded bg-gray-100 p-4">
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
					<h2 className="mb-4 font-semibold text-2xl">編集のコツ</h2>
					<ul className="list-disc space-y-2 pl-6">
						<li>変更を小刻みに行う</li>
						<li>変更のたびにプレビューを確認</li>
						<li>エラーが発生した場合は、エラーメッセージを確認</li>
						<li>必要に応じてAIアシスタントに質問</li>
					</ul>
				</section>

				<div className="mt-8 flex justify-between">
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
