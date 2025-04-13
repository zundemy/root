export default function Page() {
	return (
		<div className="space-y-8">
			<h1 className="font-bold text-4xl">コンピューターリテラシー 2025</h1>

			<section className="space-y-4">
				<h2 className="font-semibold text-2xl">最終課題について</h2>
				<p className="text-lg">
					この授業では、Webサイトの作成を通じて、コンピューターの基本的な操作とプログラミングの基礎を学びます。
					最終課題では、自分で作成したWebサイトを公開することが目標です。
				</p>
			</section>

			<section className="space-y-4">
				<h2 className="font-semibold text-2xl">最終課題の要件</h2>
				<ul className="list-disc space-y-2 pl-6">
					<li>オリジナルのWebサイトを作成する</li>
					<li>HTML、CSS、JavaScriptを使用する</li>
					<li>レスポンシブデザインに対応する</li>
					<li>Webサイトを公開する</li>
				</ul>
			</section>

			<section className="space-y-4">
				<h2 className="font-semibold text-2xl">使用するツール</h2>
				<div className="rounded-lg border border-gray-200 p-6 shadow-sm">
					<h3 className="mb-2 font-semibold text-xl">Bolt.new</h3>
					<p className="text-gray-700">
						Bolt.newは、AIを活用したWebサイト作成ツールです。
						プログラミングの知識がなくても、自然な言葉でWebサイトを作成することができます。
					</p>
					<a
						href="https://bolt.new"
						target="_blank"
						rel="noopener noreferrer"
						className="mt-2 inline-block text-blue-500 hover:underline"
					>
						Bolt.newの公式サイトへ
					</a>
				</div>
			</section>
		</div>
	);
}
