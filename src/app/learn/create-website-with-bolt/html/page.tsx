import boltNewHtmlBefore from "@/assets/bolt-new-html-before.png";
import boltNewMinimalWebTemplate from "@/assets/bolt-new-minimal-web-template.png";
import htmlElement from "@/assets/html-element.png";
import { AppBreadcrumb } from "@/components/app-breadcrumb";
import { CodeBlock } from "@/components/code-block";
import { LinkAsButton } from "@/components/link-as-button";
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
					<h2>テンプレートを使用</h2>
					<p>
						今回はHTML,CSS,JavaScriptのみの最小限のプロジェクトで説明するためにテンプレートを用意しました。
					</p>
					<p>
						以下のリンクをクリックすると、テンプレートが適用された状態でboltプロジェクトが作成されます。
					</p>
					<p>
						<LinkAsButton
							href="https://bolt.new/github.com/zundemy/minimal-web-template"
							external
						>
							https://bolt.new/github.com/zundemy/minimal-web-template
						</LinkAsButton>
					</p>
					<p>以下のような画面になればokです。</p>
					<Image
						src={boltNewMinimalWebTemplate}
						alt="テンプレート適用した画面"
					/>
				</section>

				<section>
					<h2>HTMLとは</h2>
					<p>
						HTML（HyperText Markup
						Language）は、Webページの構造を定義するための言語です。
						タグと呼ばれる要素を使って、テキストや画像などのコンテンツを配置します。
					</p>
				</section>

				<section>
					<h2>HTMLの基本構造</h2>

					<p>HTMLの最も基本的な形は以下のようなものです。</p>
					<Image src={htmlElement} alt="HTML要素" />
					<p>
						開始タグと終了タグの間にコンテンツを記述し、このセットをHTML要素と呼びます。
					</p>
					<p>
						開始タグは&lt; &gt;、終了タグは&lt;/ &gt;
						で要素名（この場合は大見出しを表す h1 ）を囲んでいます。
					</p>
				</section>

				<section>
					<h2>HTMLのテンプレート</h2>

					<p>
						まずはテンプレートのファイルにどんなことが書いてあるか見てみましょう。
					</p>
					<p>
						boltのCodeタブから、<code>index.html</code>
						ファイルを選択して下さい。
					</p>
					<Image src={boltNewHtmlBefore} alt="boltのHTML画面" />

					<p>以下のようなソースコードになっています。</p>
					<CodeBlock
						lang="html"
						code={[
							"<!DOCTYPE html>",
							"<html>",
							"  <head>",
							'    <meta charset="UTF-8" />',
							'    <meta name="viewport" content="width=device-width, initial-scale=1.0" />',
							"    <title>minimal-web-template</title>",
							'    <link rel="stylesheet" href="style.css" />',
							'    <script type="module" src="main.js"></script>',
							"  </head>",
							"",
							"  <body>",
							"    <h1>Hello, world!</h1>",
							"  </body>",
							"</html>",
						].join("\n")}
					/>

					<p>以下はこのファイルの内容がHTMLであることを示すためのものです。</p>
					<CodeBlock
						lang="html"
						// biome-ignore format: for code
						code={[
							"<!DOCTYPE html>",
							"<html>",
							"",
							"</html>"
						].join("\n")}
					/>

					<p>
						bodyタグの中にブラウザに表示するものを記述し、
						headタグには画面には表示しないメタデータを記述します。
					</p>
					<CodeBlock
						lang="html"
						code={[
							"<!DOCTYPE html>",
							"<html>",
							"  <head>",
							"    <!-- 画面に表示しないメタデータを記述 -->",
							"  </head>",
							"",
							"  <body>",
							"    <!-- 画面に表示する内容を記述 -->",
							"  </body>",
							"</html>",
						].join("\n")}
					/>

					<p>テンプレートのhead タグには以下のような内容が記述されています。</p>
					<CodeBlock
						lang="html"
						code={[
							"<head>",
							"  <!-- 文字コードにUTF-8を指定 -->",
							'  <meta charset="UTF-8" />',
							"",
							"  <!-- スマホで表示崩れしないようにviewportの設定 -->",
							'  <meta name="viewport" content="width=device-width, initial-scale=1.0" />',
							"",
							"  <!-- ブラウザのタブや検索エンジンに表示されるタイトルを指定 -->",
							"  <title>minimal-web-template</title>",
							"",
							"  <!-- CSSファイルstyle.cssを読み込み -->",
							'  <link rel="stylesheet" href="style.css" />',
							"",
							"  <!-- JavaScriptファイルmain.jsを読み込み -->",
							'  <script type="module" src="main.js"></script>',
							"</head>",
						].join("\n")}
					/>

					<p>
						テンプレートのbodyタグにはh1タグ（1番大きな見出しを表示するHTMLタグ）でHello,
						world!という文字を表示しています。
					</p>
					<CodeBlock
						lang="html"
						// biome-ignore format: for code
						code={[
							"<body>",
							"  <h1>Hello, world!</h1>",
							"</body>",
						].join("\n")}
					/>
				</section>

				<section>
					<h2>HTMLを書いてみよう</h2>
					<h3>見出しと段落</h3>
					<p>
						見出しと段落を追加してみましょう。bodyタグの中に以下のコードを追加してください。
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
					<LinkAsButton
						href="https://developer.mozilla.org/ja/docs/Web/HTML/Reference"
						external
					>
						MDN Web Docs - HTML リファレンス
					</LinkAsButton>
				</section>
			</article>
		</div>
	);
}
