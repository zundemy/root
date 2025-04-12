import Link from "next/link";

export default function CommandsPage() {
	return (
		<div className="mx-auto max-w-4xl p-8">
			<h1 className="mb-8 font-bold text-3xl">6. 様々な指示を試してみる</h1>

			<div className="space-y-6">
				<section>
					<h2 className="mb-4 font-semibold text-2xl">基本的な指示の例</h2>
					<div className="space-y-4">
						<div className="rounded bg-gray-100 p-4">
							<h3 className="mb-2 font-semibold">色の変更</h3>
							<pre className="rounded bg-white p-2">
								ヘッダーの背景色を青に変更してください。
							</pre>
						</div>
						<div className="rounded bg-gray-100 p-4">
							<h3 className="mb-2 font-semibold">レイアウトの変更</h3>
							<pre className="rounded bg-white p-2">
								メインコンテンツを2カラムレイアウトに変更してください。
							</pre>
						</div>
						<div className="rounded bg-gray-100 p-4">
							<h3 className="mb-2 font-semibold">アニメーションの追加</h3>
							<pre className="rounded bg-white p-2">
								ボタンにホバーエフェクトを追加してください。
							</pre>
						</div>
					</div>
				</section>

				<section>
					<h2 className="mb-4 font-semibold text-2xl">より具体的な指示の例</h2>
					<div className="space-y-4">
						<div className="rounded bg-gray-100 p-4">
							<h3 className="mb-2 font-semibold">フォントの変更</h3>
							<pre className="rounded bg-white p-2">
								見出しのフォントをGoogle Fontsの"Noto Sans
								JP"に変更してください。
							</pre>
						</div>
						<div className="rounded bg-gray-100 p-4">
							<h3 className="mb-2 font-semibold">レスポンシブ対応</h3>
							<pre className="rounded bg-white p-2">
								スマートフォン表示時にメニューをハンバーガーメニューに変更してください。
							</pre>
						</div>
						<div className="rounded bg-gray-100 p-4">
							<h3 className="mb-2 font-semibold">コンポーネントの追加</h3>
							<pre className="rounded bg-white p-2">
								コンタクトフォームを追加してください。
							</pre>
						</div>
					</div>
				</section>

				<section>
					<h2 className="mb-4 font-semibold text-2xl">指示のコツ</h2>
					<ul className="list-disc space-y-2 pl-6">
						<li>具体的な指示を出す</li>
						<li>必要な場合は例を示す</li>
						<li>段階的に指示を出す</li>
						<li>エラーが発生した場合は、エラーメッセージを共有する</li>
					</ul>
				</section>

				<div className="mt-8 flex justify-between">
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
