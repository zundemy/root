import taiwaCoffee from "@/assets/taiwa-coffee.png";
import Image from "next/image";

export default function Page() {
	return (
		<article>
			<h1>やること</h1>

			<p>
				この授業では、生成AIを使用してWebサイトを作成 + 公開する方法を学びます。
			</p>

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
				<p>生成AIを使用してWebサイトを作成してください。</p>
				<p>
					何のサイトにするかは自由です。例として、以下のサイトを生成AIで作成してみました。
				</p>
				<a
					href="https://dapper-squirrel-7a7bef.netlify.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					課題サンプルサイトへ
				</a>
				<Image src={taiwaCoffee} alt="タイワコーヒーのトップ画面" />

				<h3>要件</h3>
				<ul>
					<li>オリジナルのWebサイトを作成する</li>
					<li>Webサイトを公開し、URLを発行する</li>
				</ul>
				<p>
					課題はURLをmoodleに提出してください。特に評価して欲しいポイントなどがあればそれも入力してください。
				</p>
			</section>
		</article>
	);
}
