import { AppBreadcrumb } from "@/components/app-breadcrumb";

export default function Page() {
	return (
		<div>
			<AppBreadcrumb
				items={[
					{ label: "Home", href: "/" },
					{ label: "bolt", href: "/learn/create-website-with-bolt" },
					{ label: "JavaScriptを編集する" },
				]}
			/>
			<article className="mt-12">
				<h1>JavaScriptを編集する</h1>

				<section>
					<h2>JavaScriptとは</h2>
					<p>
						JavaScriptは、Webページに動的な機能を追加するためのプログラミング言語です。
						ユーザーの操作に応じてコンテンツを変更したり、アニメーションを追加したりすることができます。
					</p>
				</section>

				<section>
					<h2>基本的なJavaScriptの機能</h2>

					<div>
						<h3>変数とデータ型</h3>
						<p>
							データを保存するための変数と、そのデータの種類について学びます。
						</p>
						<pre>
							{`// 文字列
let name = "山田太郎";

// 数値
let age = 20;

// 真偽値
let isStudent = true;

// 配列
let hobbies = ["読書", "音楽", "スポーツ"];

// オブジェクト
let person = {
  name: "山田太郎",
  age: 20,
  isStudent: true
};`}
						</pre>
					</div>

					<div>
						<h3>関数</h3>
						<p>特定の処理をまとめて実行するための関数について学びます。</p>
						<pre>
							{`// 関数の定義
function greet(name) {
  return "こんにちは、" + name + "さん！";
}

// 関数の呼び出し
let message = greet("山田");
console.log(message); // "こんにちは、山田さん！"`}
						</pre>
					</div>

					<div>
						<h3>イベント処理</h3>
						<p>ユーザーの操作に応じて処理を実行する方法について学びます。</p>
						<pre>
							{`// ボタンがクリックされたときの処理
document.getElementById("myButton").addEventListener("click", function() {
  alert("ボタンがクリックされました！");
});`}
						</pre>
					</div>
				</section>

				<section>
					<h2>参考資料</h2>
					<p>
						JavaScriptについてもっと詳しく知りたい方は、以下のMDN Web
						Docsを参考にしてください：
					</p>
					<a
						href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference"
						target="_blank"
						rel="noopener noreferrer"
					>
						MDN Web Docs - JavaScript リファレンス
					</a>
				</section>
			</article>
		</div>
	);
}
