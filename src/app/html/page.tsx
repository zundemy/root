import boltNewHtmlBefore from "@/assets/bolt-new-html-before.png";
import htmlElement from "@/assets/html-element.png";
import { CodeBlock } from "@/components/code-block";
import Image from "next/image";

export default function Page() {
	return (
		<article>
			<h1>HTMLを編集する</h1>

			<section>
				<h2>HTMLとは</h2>
				<p>
					HTML（HyperText Markup
					Language）は、Webページの構造を定義するための言語です。
					タグと呼ばれる要素を使って、テキストや画像などのコンテンツを配置します。
				</p>
				<CodeBlock
					lang="html"
					code={[
						"<h1>私のホームページ</h1>",
						"<p>こんにちは！ここは私の紹介ページです。</p>",
					].join("\n")}
				/>
				<Image src={htmlElement} alt="HTML要素" />
				<p>
					Bolt.newのCode画面から、<code>index.html</code>
					ファイルを選択して下さい。
				</p>
				<Image src={boltNewHtmlBefore} alt="Bolt.newのHTML画面" />
			</section>

			<section>
				<h2>基本的なHTMLタグ</h2>

				<div>
					<h3>aタグ（リンク）</h3>
					<p>他のページやWebサイトへのリンクを作成します。</p>
					<pre>{`<a href="https://example.com">リンクテキスト</a>`}</pre>
					<p>
						例：
						<a
							href="https://example.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							リンクテキスト
						</a>
					</p>
				</div>

				<div>
					<h3>imgタグ（画像）</h3>
					<p>画像を表示します。</p>
					<pre>{`<img src="画像のURL" alt="代替テキスト">`}</pre>
					<p>
						例：
						<img src="https://via.placeholder.com/150" alt="サンプル画像" />
					</p>
				</div>

				<div>
					<h3>inputタグ（入力フォーム）</h3>
					<p>ユーザーからの入力を受け取るフォームを作成します。</p>
					<pre>{`<input type="text" placeholder="テキストを入力">`}</pre>
					<p>
						例：
						<input type="text" placeholder="テキストを入力" />
					</p>
				</div>
			</section>

			<section>
				<h2>参考資料</h2>
				<p>
					HTMLについてもっと詳しく知りたい方は、以下のMDN Web
					Docsを参考にしてください：
				</p>
				<a
					href="https://developer.mozilla.org/ja/docs/Web/HTML/Reference"
					target="_blank"
					rel="noopener noreferrer"
				>
					MDN Web Docs - HTML リファレンス
				</a>
			</section>
		</article>
	);
}
