import boltNewCreated from "@/assets/bolt-new-created.png";
import boltNewSignup from "@/assets/bolt-new-signup.png";
import boltNewTop from "@/assets/bolt-new-top.png";
import { CodeBlock } from "@/components/code-block";
import Image from "next/image";

export default function Page() {
	return (
		<article>
			<h1>Webサイトを作る</h1>

			<section>
				<h2>Bolt.newを使ってみよう</h2>
				<p>
					Bolt.newは、チャットベースの生成AIを使用してアプリ開発が出来るツールです。
				</p>
				<Image src={boltNewTop} alt="Bolt.newのトップ画面" />
			</section>

			<section>
				<h2>手順</h2>
				<ol>
					<li>
						<h3>Bolt.newにアクセス</h3>
						<p>
							<a
								href="https://bolt.new"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://bolt.new
							</a>
							にアクセスしてください。
						</p>
					</li>

					<li>
						<h3>サンプルプロンプトを実行</h3>
						<p>
							以下のプロンプトをコピーして、Bolt.newのプロンプト入力欄に貼り付けてください。
						</p>
						<CodeBlock
							lang="md"
							code={[
								"以下の条件を満たすWebサイトを作成してください",
								"- viteを使用し、index.html, style.cssのみでjavascriptは使用しないシンプルな構成にしてください。",
								"- htmlにlinkタグを追加してstyle.cssを読み込んでください。",
								"- クラシックで落ち着いた雰囲気のカフェのサイトを作成してください。",
								"- コンセプト、お知らせ、メニュー、お問い合わせのセクションを入れてください。",
								"- 適度に画像を使用してください。",
							].join("\n")}
						/>
					</li>

					<li>
						<h3>アカウント作成</h3>
						<p>
							プロンプトを実行しようとするとサインアップモーダルが表示されます。いずれかの方法でサインアップしてください。
						</p>
						<Image src={boltNewSignup} alt="Bolt.newのサインアップ画面" />
					</li>

					<li>
						<h3>プロンプトを実行</h3>
						<p>
							プロンプトを実行すると、生成AIがコード生成を開始します。しばらくしてカフェのサイトのプレビューが表示されたら成功です。
						</p>
						<Image
							src={boltNewCreated}
							alt="Bolt.newで作成されたカフェのサイト"
						/>
					</li>

					<li>
						<h3>カスタマイズ</h3>
						<p>
							追加のプロンプトを実行して生成されたWebサイトを自由にカスタマイズしてみましょう。
						</p>
						<ul>
							<li>色やフォントの変更</li>
							<li>コンテンツの追加・編集</li>
							<li>レイアウトの調整</li>
							<li>画像の追加</li>
						</ul>
					</li>
				</ol>
			</section>
		</article>
	);
}
