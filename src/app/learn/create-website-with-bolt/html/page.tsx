import boltNewHtmlBefore from "@/assets/bolt-new-html-before.png";
import htmlElement from "@/assets/html-element.png";
import { AppBreadcrumb } from "@/components/app-breadcrumb";
import { CodeBlock } from "@/components/code-block";
import Image from "next/image";

export default function Page() {
	return (
		<div>
			<AppBreadcrumb
				items={[
					{ label: "Home", href: "/" },
					{ label: "bolt", href: "/learn/create-website-with-bolt" },
					{ label: "HTMLを編集する" },
				]}
			/>
			<article className="mt-12">
				<h1>HTMLを編集する</h1>

				<section>
					<h2>HTMLとは</h2>
					<p>
						HTML（HyperText Markup
						Language）は、Webページの構造を定義するための言語です。
						タグと呼ばれる要素を使って、テキストや画像などのコンテンツを配置します。
					</p>
					<Image src={htmlElement} alt="HTML要素" />
					<p>
						Bolt.newのCode画面から、<code>index.html</code>
						ファイルを選択して下さい。
					</p>
					<Image src={boltNewHtmlBefore} alt="Bolt.newのHTML画面" />
				</section>

				<section>
					<h2>HTMLの基本構造</h2>
					<p>
						まずは、HTMLの基本構造から始めましょう。以下のコードをコピーして、index.htmlに貼り付けてください。
					</p>
					<CodeBlock
						lang="html"
						code={[
							"<!DOCTYPE html>",
							'<html lang="ja">',
							"  <head>",
							'    <meta charset="UTF-8">',
							"    <title>私のホームページ</title>",
							"  </head>",
							"  <body>",
							"    <h1>ようこそ</h1>",
							"  </body>",
							"</html>",
						].join("\n")}
					/>
				</section>

				<section>
					<h2>見出しと段落</h2>
					<p>
						次に、見出しと段落を追加してみましょう。bodyタグの中に以下のコードを追加してください。
					</p>
					<CodeBlock
						lang="html"
						code={[
							"<h2>自己紹介</h2>",
							"<p>こんにちは！私はWeb開発を勉強しています。</p>",
							"<p>HTMLを使って、自分のホームページを作成しています。</p>",
						].join("\n")}
					/>
				</section>

				<section>
					<h2>リンクの追加</h2>
					<p>他のページへのリンクを追加してみましょう。</p>
					<CodeBlock
						lang="html"
						code={[
							"<h2>お気に入りのサイト</h2>",
							"<p>以下のサイトがおすすめです：</p>",
							'<a href="https://example.com" target="_blank">サンプルサイト</a>',
						].join("\n")}
					/>
				</section>

				<section>
					<h2>画像の追加</h2>
					<p>
						画像を追加してみましょう。publicフォルダに画像を配置して、以下のコードを追加してください。
					</p>
					<CodeBlock
						lang="html"
						code={[
							"<h2>プロフィール画像</h2>",
							'<img src="/profile.jpg" alt="プロフィール画像" width="200">',
						].join("\n")}
					/>
				</section>

				<section>
					<h2>リストの作成</h2>
					<p>順序付きリストと順序なしリストを作成してみましょう。</p>
					<CodeBlock
						lang="html"
						code={[
							"<h2>趣味</h2>",
							"<ul>",
							"  <li>プログラミング</li>",
							"  <li>読書</li>",
							"  <li>旅行</li>",
							"</ul>",
							"",
							"<h2>今日の予定</h2>",
							"<ol>",
							"  <li>朝食を食べる</li>",
							"  <li>HTMLの勉強</li>",
							"  <li>散歩に行く</li>",
							"</ol>",
						].join("\n")}
					/>
				</section>

				<section>
					<h2>フォームの作成</h2>
					<p>ユーザーからの入力を受け取るフォームを作成してみましょう。</p>
					<CodeBlock
						lang="html"
						code={[
							"<h2>お問い合わせ</h2>",
							"<form>",
							"  <div>",
							'    <label for="name">お名前：</label>',
							'    <input type="text" id="name" name="name">',
							"  </div>",
							"  <div>",
							'    <label for="email">メールアドレス：</label>',
							'    <input type="email" id="email" name="email">',
							"  </div>",
							"  <div>",
							'    <label for="message">メッセージ：</label>',
							'    <textarea id="message" name="message"></textarea>',
							"  </div>",
							'  <button type="submit">送信</button>',
							"</form>",
						].join("\n")}
					/>
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
		</div>
	);
}
