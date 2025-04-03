import Link from "next/link";

export default function FirstPage() {
	return (
		<div className="max-w-4xl mx-auto p-8">
			<h1 className="text-3xl font-bold mb-8">4. 最初のWebページを作成</h1>

			<div className="space-y-6">
				<section>
					<h2 className="text-2xl font-semibold mb-4">
						Vite + HTML/CSSプロジェクトの作成
					</h2>
					<ol className="list-decimal pl-6 space-y-4">
						<li>プロジェクト作成画面で「Create a new project」を選択</li>
						<li>
							プロンプトに以下を入力：
							<pre className="bg-gray-100 p-4 rounded mt-2">
								Viteプロジェクトを作成してください。HTMLとCSSのみを使用したシンプルなランディングページを作成します。
							</pre>
						</li>
						<li>
							AIが生成したコードを確認
							<ul className="list-disc pl-4 mt-2 text-gray-600">
								<li>生成されたコードの構造を理解しましょう</li>
								<li>HTMLとCSSの基本的な構造を確認しましょう</li>
							</ul>
						</li>
						<li>
							プレビューで表示を確認
							<ul className="list-disc pl-4 mt-2 text-gray-600">
								<li>リアルタイムで変更が反映されることを確認しましょう</li>
								<li>レスポンシブデザインの動作を確認しましょう</li>
							</ul>
						</li>
					</ol>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">生成されたコードの例</h2>
					<div className="space-y-4">
						<div>
							<h3 className="font-semibold mb-2">HTML</h3>
							<pre className="bg-gray-100 p-4 rounded overflow-x-auto">
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
							<h3 className="font-semibold mb-2">CSS</h3>
							<pre className="bg-gray-100 p-4 rounded overflow-x-auto">
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

				<div className="flex justify-between mt-8">
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
