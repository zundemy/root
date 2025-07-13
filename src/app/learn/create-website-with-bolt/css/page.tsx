import { AppBreadcrumb } from "@/components/app-breadcrumb";
import { LinkAsButton } from "@/components/link-as-button";

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
					<h2>基本的なCSSプロパティ</h2>

					<div>
						<h3>background-color（背景色）</h3>
						<p>要素の背景色を変更します。</p>
						<pre>
							{`.example {
  background-color: #f0f0f0;
}`}
						</pre>
						<div>この要素の背景色は灰色です。</div>
					</div>

					<div>
						<h3>color（文字色）</h3>
						<p>テキストの色を変更します。</p>
						<pre>
							{`.example {
  color: #ff0000;
}`}
						</pre>
						<p>このテキストは赤色です。</p>
					</div>

					<div>
						<h3>font-size（文字サイズ）</h3>
						<p>テキストのサイズを変更します。</p>
						<pre>
							{`.example {
  font-size: 20px;
}`}
						</pre>
						<p>このテキストは大きいサイズです。</p>
					</div>
				</section>

				<section>
					<h2>参考資料</h2>
					<p>
						CSSについてもっと詳しく知りたい方は、以下のMDN Web
						Docsを参考にしてください：
					</p>
					<LinkAsButton
						href="https://developer.mozilla.org/ja/docs/Web/CSS/Reference"
						external
					>
						MDN Web Docs - CSS リファレンス
					</LinkAsButton>
				</section>
			</article>
		</div>
	);
}
