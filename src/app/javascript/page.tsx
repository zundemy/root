export default function Page() {
	return (
		<div className="space-y-8">
			<h1 className="font-bold text-4xl">JavaScriptを編集する</h1>

			<section className="space-y-4">
				<h2 className="font-semibold text-2xl">JavaScriptとは</h2>
				<p className="text-lg">
					JavaScriptは、Webページに動的な機能を追加するためのプログラミング言語です。
					ユーザーの操作に応じてコンテンツを変更したり、アニメーションを追加したりすることができます。
				</p>
			</section>

			<section className="space-y-4">
				<h2 className="font-semibold text-2xl">基本的なJavaScriptの機能</h2>

				<div className="rounded-lg border border-gray-200 p-6 shadow-sm">
					<h3 className="mb-2 font-semibold text-xl">変数とデータ型</h3>
					<p className="text-gray-700">
						データを保存するための変数と、そのデータの種類について学びます。
					</p>
					<pre className="mt-2 rounded bg-gray-100 p-4">
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

				<div className="rounded-lg border border-gray-200 p-6 shadow-sm">
					<h3 className="mb-2 font-semibold text-xl">関数</h3>
					<p className="text-gray-700">
						特定の処理をまとめて実行するための関数について学びます。
					</p>
					<pre className="mt-2 rounded bg-gray-100 p-4">
						{`// 関数の定義
function greet(name) {
  return "こんにちは、" + name + "さん！";
}

// 関数の呼び出し
let message = greet("山田");
console.log(message); // "こんにちは、山田さん！"`}
					</pre>
				</div>

				<div className="rounded-lg border border-gray-200 p-6 shadow-sm">
					<h3 className="mb-2 font-semibold text-xl">イベント処理</h3>
					<p className="text-gray-700">
						ユーザーの操作に応じて処理を実行する方法について学びます。
					</p>
					<pre className="mt-2 rounded bg-gray-100 p-4">
						{`// ボタンがクリックされたときの処理
document.getElementById("myButton").addEventListener("click", function() {
  alert("ボタンがクリックされました！");
});`}
					</pre>
				</div>
			</section>

			<section className="space-y-4">
				<h2 className="font-semibold text-2xl">参考資料</h2>
				<p className="text-lg">
					JavaScriptについてもっと詳しく知りたい方は、以下のMDN Web
					Docsを参考にしてください：
				</p>
				<a
					href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference"
					target="_blank"
					rel="noopener noreferrer"
					className="mt-2 block text-blue-500 hover:underline"
				>
					MDN Web Docs - JavaScript リファレンス
				</a>
			</section>
		</div>
	);
}
