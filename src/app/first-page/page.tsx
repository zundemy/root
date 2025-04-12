import Link from "next/link";

export default function FirstPage() {
	return (
		<div className="mx-auto max-w-4xl p-8">
			<h1 className="mb-8 font-bold text-3xl">4. 最初のWebページを作成</h1>

			<div className="space-y-6">
				<section>
					<h2 className="mb-4 font-semibold text-2xl">
						Vite + HTML/CSSプロジェクトの作成
					</h2>
					<ol className="list-decimal space-y-4 pl-6">
						<li>プロジェクト作成画面で「Create a new project」を選択</li>
						<li>
							プロンプトに以下を入力：
							<pre className="mt-2 rounded bg-gray-100 p-4">
								Viteプロジェクトを作成してください。HTMLとCSSのみを使用したシンプルなランディングページを作成します。
							</pre>
						</li>
						<li>
							AIが生成したコードを確認
							<ul className="mt-2 list-disc pl-4 text-gray-600">
								<li>生成されたコードの構造を理解しましょう</li>
								<li>HTMLとCSSの基本的な構造を確認しましょう</li>
							</ul>
						</li>
						<li>
							プレビューで表示を確認
							<ul className="mt-2 list-disc pl-4 text-gray-600">
								<li>リアルタイムで変更が反映されることを確認しましょう</li>
								<li>レスポンシブデザインの動作を確認しましょう</li>
							</ul>
						</li>
					</ol>
				</section>

				<section>
					<h2 className="mb-4 font-semibold text-2xl">生成されたコードの例</h2>
					<div className="space-y-4">
						<div>
							<h3 className="mb-2 font-semibold">HTML</h3>
							<pre className="overflow-x-auto rounded bg-gray-100 p-4">
								{`<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>My Landing Page</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header>
      <h1>ようこそ</h1>
    </header>
    <main>
      <p>これはテストページです</p>
    </main>
  </body>
</html>`}
							</pre>
						</div>
						<div>
							<h3 className="mb-2 font-semibold">CSS</h3>
							<pre className="overflow-x-auto rounded bg-gray-100 p-4">
								{`body {
  font-family: sans-serif;
  margin: 0;
  padding: 20px;
}

header {
  text-align: center;
  margin-bottom: 40px;
}

h1 {
  color: #333;
  font-size: 2em;
}`}
							</pre>
						</div>
					</div>
				</section>

				<div className="mt-8 flex justify-between">
					<Link
						href="/tutorial/getting-started"
						className="text-blue-500 hover:underline"
					>
						← 前の章へ
					</Link>
					<Link
						href="/tutorial/deploy"
						className="text-blue-500 hover:underline"
					>
						次の章へ →
					</Link>
				</div>
			</div>
		</div>
	);
}
