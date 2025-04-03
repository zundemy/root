import Link from "next/link";

export default function CommandsPage() {
	return (
		<div className="max-w-4xl mx-auto p-8">
			<h1 className="text-3xl font-bold mb-8">6. 様々な指示を試してみる</h1>

			<div className="space-y-6">
				<section>
					<h2 className="text-2xl font-semibold mb-4">基本的な指示の例</h2>
					<div className="space-y-4">
						<div className="bg-gray-100 p-4 rounded">
							<h3 className="font-semibold mb-2">色の変更</h3>
							<pre className="bg-white p-2 rounded">
								ヘッダーの背景色を青に変更してください。
							</pre>
						</div>
						<div className="bg-gray-100 p-4 rounded">
							<h3 className="font-semibold mb-2">レイアウトの変更</h3>
							<pre className="bg-white p-2 rounded">
								メインコンテンツを2カラムレイアウトに変更してください。
							</pre>
						</div>
						<div className="bg-gray-100 p-4 rounded">
							<h3 className="font-semibold mb-2">アニメーションの追加</h3>
							<pre className="bg-white p-2 rounded">
								ボタンにホバーエフェクトを追加してください。
							</pre>
						</div>
					</div>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">より具体的な指示の例</h2>
					<div className="space-y-4">
						<div className="bg-gray-100 p-4 rounded">
							<h3 className="font-semibold mb-2">フォントの変更</h3>
							<pre className="bg-white p-2 rounded">
								見出しのフォントをGoogle Fontsの"Noto Sans
								JP"に変更してください。
							</pre>
						</div>
						<div className="bg-gray-100 p-4 rounded">
							<h3 className="font-semibold mb-2">レスポンシブ対応</h3>
							<pre className="bg-white p-2 rounded">
								スマートフォン表示時にメニューをハンバーガーメニューに変更してください。
							</pre>
						</div>
						<div className="bg-gray-100 p-4 rounded">
							<h3 className="font-semibold mb-2">コンポーネントの追加</h3>
							<pre className="bg-white p-2 rounded">
								コンタクトフォームを追加してください。
							</pre>
						</div>
					</div>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">指示のコツ</h2>
					<ul className="list-disc pl-6 space-y-2">
						<li>具体的な指示を出す</li>
						<li>必要な場合は例を示す</li>
						<li>段階的に指示を出す</li>
						<li>エラーが発生した場合は、エラーメッセージを共有する</li>
					</ul>
				</section>

				<div className="flex justify-between mt-8">
					<Link
						href="/tutorial/deploy"
						className="text-blue-500 hover:underline"
					>
						← 前の章へ
					</Link>
					<Link
						href="/tutorial/editing"
						className="text-blue-500 hover:underline"
					>
						次の章へ →
					</Link>
				</div>
			</div>
		</div>
	);
}
