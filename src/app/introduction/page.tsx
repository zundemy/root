import boltNewTop from "@/assets/bolt-new-top.png";
import Image from "next/image";

export default function Page() {
	return (
		<article>
			<h1>やること</h1>

			<section>
				<h2>授業コンセプト</h2>
				<p>1年生向けの授業なので、以下のコンセプトで内容を作成しています。</p>
				<ul>
					<li>難しい話はしない</li>
					<li>web業界の仕事に興味を持ってもらう</li>
					<li>どの学類志望の人でも実践で使える内容にする</li>
				</ul>
			</section>

			<section>
				<h2>最終課題について</h2>
				<p>
					この授業では、Webサイトの作成を通じて、コンピューターの基本的な操作とプログラミングの基礎を学びます。
					最終課題では、自分で作成したWebサイトを公開することが目標です。
				</p>
				{/* TODO: サンプルサイトの画像追加 */}
				{/* TODO: サンプルサイトのリンク追加 */}
				<h3>要件</h3>
				<ul>
					<li>オリジナルのWebサイトを作成する</li>
					<li>HTML、CSS、JavaScriptを使用する</li>
					<li>レスポンシブデザインに対応する</li>
					<li>Webサイトを公開する</li>
				</ul>
			</section>

			<section>
				<h2>使用するツール</h2>
				<div>
					<h3>Bolt.new</h3>
					<Image src={boltNewTop} alt="Bolt.newのトップ画面" />
					<p>
						Bolt.newは、AIを活用したWebサイト作成ツールです。
						プログラミングの知識がなくても、自然な言葉でWebサイトを作成することができます。
					</p>
				</div>
			</section>
		</article>
	);
}
