import boltNewCssBefore from "@/assets/bolt-new-css-before.png";
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
					{ label: "CSSを編集する" },
				]}
			/>
			<article className="mt-12">
				<h1>CSSを編集する</h1>

				<section>
					<h2>CSSとは</h2>
					<p>
						CSS（Cascading Style
						Sheets）は、Webページの見た目を装飾するための言語です。
						HTMLで作成した要素の色、サイズ、レイアウトなどを指定することができます。
					</p>
				</section>

				<section>
					<h2>CSSの基本構造</h2>
					<p>
						まずはテンプレートのファイルにどんなことが書いてあるか見てみましょう。
					</p>
					<p>
						boltのCodeタブから、<code>style.css</code>
						ファイルを選択して下さい。
					</p>
					<Image src={boltNewCssBefore} alt="boltのCSS画面" />

					<p>以下のようなソースコードになっています。</p>
					<CodeBlock
						lang="css"
						// biome-ignore format: for code
						code={[
							"h1 {",
							"  color: blue;",
							"}"
						].join("\n")}
					/>
					<p>CSSは以下のような構造になっています。</p>
					<CodeBlock
						lang="css"
						// biome-ignore format: for code
						code={[
							"セレクタ {",
							"  プロパティ: 値;",
							"}"
						].join("\n")}
					/>
					<p>
						セレクタでどのHTML要素にスタイルを適用するかを指定
						<br />
						プロパティで適用するスタイルの種類を指定（文字色、サイズ、余白、位置など）
						<br />
						値で指定した要素のプロパティにどのようなスタイルを適用するかを指定します。
					</p>
					<p>
						テンプレートでは、h1要素の文字色(color)を青(blue)に変更しています。
					</p>
				</section>

				<section>
					<h2>CSSを書いてみよう</h2>

					<h3>要素セレクタとクラスセレクタ</h3>
					<h3>テキストのスタイル</h3>
					<p>color,font-size,font-weight,font-family,text-align</p>
					<h3>サイズ、余白</h3>
					<p>background-color,width,height,border,padding,margin</p>
					<h3>レイアウト・配置</h3>
					<p>display,position</p>
					<p>
						<LinkAsButton
							href="https://developer.mozilla.org/ja/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox"
							external
						>
							フレックスボックスの基本概念
						</LinkAsButton>
						<LinkAsButton
							href="https://developer.mozilla.org/ja/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout"
							external
						>
							グリッドレイアウトの基本概念
						</LinkAsButton>
					</p>
				</section>

				<section>
					<h2>参考資料</h2>
					<p>
						ここではよく使用するプロパティを抜粋して紹介しました。各CSSプロパティの書き方を忘れた場合や、他のCSSプロパティを知りたい人は以下を参考にして下さい。
					</p>
					<LinkAsButton
						href="https://developer.mozilla.org/ja/docs/Web/CSS/Properties"
						external
					>
						MDN Web Docs - CSS プロパティ
					</LinkAsButton>
					<p>こちらも全て覚える必要はないので安心して下さい。</p>
				</section>
			</article>
		</div>
	);
}
