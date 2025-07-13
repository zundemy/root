import boltNewHtmlBefore from "@/assets/bolt-new-html-before.png";
import boltNewImgShow from "@/assets/bolt-new-img-show.png";
import boltNewImgUpload from "@/assets/bolt-new-img-upload.png";
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

					<p>
						ここから実際に<code>index.html</code>を編集してみましょう。
					</p>

					<h3>見出し</h3>
					<p>Webページの見出しは&lt;h1&gt;-&lt;h6&gt;で表します。</p>
					<p>以下のコードをbodyタグの中に書いてみましょう。</p>
					<CodeBlock
						lang="html"
						code={[
							"<h1>1番目に大きな見出し</h1>",
							"<h2>2番目に大きな見出し</h2>",
							"<h3>3番目に大きな見出し</h3>",
							"<h4>4番目に大きな見出し</h4>",
							"<h5>5番目に大きな見出し</h5>",
							"<h6>6番目に大きな見出し</h6>",
						].join("\n")}
					/>
					<p>h1が1番大きい見出しで、h6が1番小さい見出しです。</p>
					<p>hはHeadingのhです。</p>
					<p>
						参考 :
						<LinkAsButton
							href="https://developer.mozilla.org/ja/docs/Web/HTML/Reference/Elements/Heading_Elements"
							external
						>
							&lt;h1&gt;-&lt;h6&gt;: HTML の見出し要素
						</LinkAsButton>
					</p>

					<h3>段落</h3>
					<p>Webページの見出しは&lt;h1&gt;-&lt;h6&gt;で表します。</p>
					<p>以下のコードをbodyタグの中に書いてみましょう。</p>
					<CodeBlock
						lang="html"
						code={[
							"<p>これはテキストの最初の段落です。これはテキストの最初の段落です。これはテキストの最初の段落です。これはテキストの最初の段落です。</p>",
							"<p>これはテキストの二番目の段落です。これはテキストの二番目の段落です。これはテキストの二番目の段落です。これはテキストの二番目の段落です。</p>",
						].join("\n")}
					/>
					<p>段落が分かれると改行されます。</p>
					<p>pはParagraphのpです。</p>
					<p>
						参考 :
						<LinkAsButton
							href="https://developer.mozilla.org/ja/docs/Web/HTML/Reference/Elements/p"
							external
						>
							&lt;p&gt;: 段落要素
						</LinkAsButton>
					</p>

					<h3>リスト</h3>
					<p>順序付きリストと順序なしリストを作成してみましょう。</p>
					<CodeBlock
						lang="html"
						code={[
							"<h2>今日の予定</h2>",
							"<ol>",
							"  <li>朝食を食べる</li>",
							"  <li>HTMLの勉強</li>",
							"  <li>散歩に行く</li>",
							"</ol>",
							"",
							"<h2>趣味</h2>",
							"<ul>",
							"  <li>プログラミング</li>",
							"  <li>読書</li>",
							"  <li>旅行</li>",
							"</ul>",
						].join("\n")}
					/>
					<p>
						olはOrdered List（順序付きリスト）、ulはUnordered
						List（順序なしリスト）です。
					</p>
					<p>リストの各項目はliタグを使用します、liはList Itemです。</p>
					<p>参考</p>
					<ul>
						<li>
							<LinkAsButton
								href="https://developer.mozilla.org/ja/docs/Web/HTML/Reference/Elements/ol"
								external
							>
								&lt;ol&gt;: 順序付きリスト要素
							</LinkAsButton>
						</li>
						<li>
							<LinkAsButton
								href="https://developer.mozilla.org/ja/docs/Web/HTML/Reference/Elements/ul"
								external
							>
								&lt;ul&gt;: 順序なしリスト要素
							</LinkAsButton>
						</li>
						<li>
							<LinkAsButton
								href="https://developer.mozilla.org/ja/docs/Web/HTML/Reference/Elements/li"
								external
							>
								&lt;li&gt;: リストアイテム要素
							</LinkAsButton>
						</li>
					</ul>

					<h3>リンク</h3>
					<p>他のページへのリンクを追加してみましょう。</p>
					<CodeBlock
						lang="html"
						code='<a href="https://google.com">サンプルサイト</a>'
					/>
					<p>
						HTML要素は<code>href="https://google.com"</code>のように属性
						(Attribute) を持つこともできます。
					</p>
					<p>
						aタグの場合はhref属性にURLを指定することでリンクを追加することができます。
					</p>
					<p>aはAnchorのaです。</p>
					<p>
						参考 :
						<LinkAsButton
							href="https://developer.mozilla.org/ja/docs/Web/HTML/Reference/Elements/a"
							external
						>
							&lt;a&gt;: アンカー要素
						</LinkAsButton>
					</p>

					<h3>画像</h3>
					<p>
						画像を追加してみましょう。publicフォルダに画像を配置して、以下のコードを追加してください。
					</p>
					<CodeBlock
						lang="html"
						code='<img src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png" alt="Firefox icon" />'
					/>
					<p>
						src属性に画像のリンク、alt属性に画像がロード出来なかった場合の代替テキストを指定します。
					</p>
					<p>正しく追加すると、Firefoxのログが表示されます。</p>
					<p>
						自分のPCから画像をアップロードして表示することもできます。以下のようにboltのFilesエリアに画像をドラッグ&ドロップして下さい。
					</p>
					<Image src={boltNewImgUpload} alt="boltに画像をアップロード" />
					<p>
						src属性にアップロードした画像のファイル名を指定すると表示されます。
					</p>
					<CodeBlock
						lang="html"
						code='<img src="firefox-icon.png" alt="Firefox icon" />'
					/>
					<Image src={boltNewImgShow} alt="boltで画像表示" />
				</section>

				<section>
					<h2>参考資料</h2>
					<p>
						ここではよく使用するタグを抜粋して紹介しました。各HTMLタグの書き方を忘れた場合や、他のHTMLタグを知りたい人は以下を参考にして下さい。
					</p>
					<LinkAsButton
						href="https://developer.mozilla.org/ja/docs/Web/HTML/Reference/Elements"
						external
					>
						MDN Web Docs - HTML 要素リファレンス
					</LinkAsButton>
					<p>
						たくさんあってびっくりするかもしれませんが、エンジニアでも全て覚えていないので安心して下さい。
					</p>
					<p>ひとまずはここで紹介したものを押さえて貰えばokです。</p>
				</section>
			</article>
		</div>
	);
}
