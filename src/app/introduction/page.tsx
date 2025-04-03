import Link from "next/link";

export default function IntroductionPage() {
	return (
		<div className="max-w-4xl mx-auto p-8">
			<h1 className="text-3xl font-bold mb-8">1. HTMLとCSSの簡単な紹介</h1>

			<div className="space-y-6">
				<section>
					<h2 className="text-2xl font-semibold mb-4">HTMLとは</h2>
					<ul className="list-disc pl-6 space-y-2">
						<li>Webページの構造を定義する言語</li>
						<li>タグを使って要素を配置</li>
						<li>
							例：
							<code className="bg-gray-100 px-2 py-1 rounded">
								&lt;h1&gt;見出し&lt;/h1&gt;
							</code>
							,{" "}
							<code className="bg-gray-100 px-2 py-1 rounded">
								&lt;p&gt;段落&lt;/p&gt;
							</code>
						</li>
					</ul>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">CSSとは</h2>
					<ul className="list-disc pl-6 space-y-2">
						<li>Webページの見た目を装飾する言語</li>
						<li>色、サイズ、レイアウトなどを指定</li>
						<li>
							例：
							<code className="bg-gray-100 px-2 py-1 rounded">color: red;</code>
							,{" "}
							<code className="bg-gray-100 px-2 py-1 rounded">
								font-size: 16px;
							</code>
						</li>
					</ul>
				</section>

				<div className="flex justify-between mt-8">
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
