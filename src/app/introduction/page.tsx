import Link from "next/link";

export default function IntroductionPage() {
	return (
		<div className="mx-auto max-w-4xl p-8">
			<h1 className="mb-8 font-bold text-3xl">1. HTMLとCSSの簡単な紹介</h1>

			<div className="space-y-6">
				<section>
					<h2 className="mb-4 font-semibold text-2xl">HTMLとは</h2>
					<ul className="list-disc space-y-2 pl-6">
						<li>Webページの構造を定義する言語</li>
						<li>タグを使って要素を配置</li>
						<li>
							例：
							<code className="rounded bg-gray-100 px-2 py-1">
								&lt;h1&gt;見出し&lt;/h1&gt;
							</code>
							,{" "}
							<code className="rounded bg-gray-100 px-2 py-1">
								&lt;p&gt;段落&lt;/p&gt;
							</code>
						</li>
					</ul>
				</section>

				<section>
					<h2 className="mb-4 font-semibold text-2xl">CSSとは</h2>
					<ul className="list-disc space-y-2 pl-6">
						<li>Webページの見た目を装飾する言語</li>
						<li>色、サイズ、レイアウトなどを指定</li>
						<li>
							例：
							<code className="rounded bg-gray-100 px-2 py-1">color: red;</code>
							,{" "}
							<code className="rounded bg-gray-100 px-2 py-1">
								font-size: 16px;
							</code>
						</li>
					</ul>
				</section>

				<div className="mt-8 flex justify-between">
					<Link href="/tutorial" className="text-blue-500 hover:underline">
						← 目次に戻る
					</Link>
					<Link
						href="/tutorial/bolt-intro"
						className="text-blue-500 hover:underline"
					>
						次の章へ →
					</Link>
				</div>
			</div>
		</div>
	);
}
