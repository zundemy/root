import boltNewCreated from "@/assets/bolt-new-created.png";
import boltNewSignup from "@/assets/bolt-new-signup.png";
import boltNewTop from "@/assets/bolt-new-top.png";
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
					{ label: "Webサイトを作る" },
				]}
			/>
			<article className="mt-12">
				<h1>Webサイトを作る</h1>

				<section>
					<h2>Bolt.newを使ってみよう</h2>
					<p>
						Bolt.newは、チャットベースの生成AIを使用してアプリ開発が出来るサービスです。
					</p>
					<p>
						AIに命令してWebサイトやWebアプリ、ゲームなどを作成できますが、ソースコードを直接編集することもできます。
					</p>
					<Image src={boltNewTop} alt="Bolt.newのトップ画面" />

					<p>Web開発に興味の"ある"人にとっては</p>
					<ul>
						<li>AIのアシストを駆使してプログラミングを勉強できる</li>
						<li>開発環境がブラウザ上で完結するのですぐに始められる</li>
						<li>
							苦戦しやすいインターネットに公開する作業がボタン1つで完結する
						</li>
					</ul>

					<p>Web開発に興味の"ない"人にとっても</p>
					<ul>
						<li>ソースコードを意識せずAIのみでも作成できる</li>
						<li>
							プロトタイプとして作って、その後はソースコードをエンジニアに引き継ぐこともできる
						</li>
						<li>ノーコードツールなどを使った場合の制約がない</li>
					</ul>

					<p>などのメリットがあります。</p>
				</section>

				<section>
					<h2>手順</h2>
					<ol>
						<li>
							<h3>Bolt.newにアクセス</h3>
							<p>
								<LinkAsButton href="https://bolt.new" external>
									https://bolt.new
								</LinkAsButton>
								にアクセスしてください。
							</p>
						</li>

						<li>
							<h3>サンプルプロンプトを実行</h3>
							<p>
								以下のプロンプト (生成AIに対する指示)
								をコピーして、Bolt.newのプロンプト入力欄に貼り付けてください。
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
							<h3>アカウント登録</h3>
							<p>
								プロンプトを実行しようとするとアカウント登録ボタンが表示されます。いずれかの方法でアカウント登録してください。
							</p>
							<Image src={boltNewSignup} alt="Bolt.newのアカウント登録画面" />
						</li>

						<li>
							<h3>プロンプトを実行</h3>
							<p>
								アカウント登録が完了すると自動的にプロンプトが実行されます。実行されない場合はチャットの送信ボタンをクリックして実行してください。
							</p>
							<p>
								しばらくしてカフェのサイトのプレビューが表示されたら成功です。
							</p>
							<Image
								src={boltNewCreated}
								alt="Bolt.newでサイトを作成した画面"
							/>
							<p>生成AIによってWebサイト</p>
						</li>

						<li>
							<h3>カスタマイズ</h3>
							<p>
								追加のプロンプトを実行して生成されたWebサイトを自由にカスタマイズしてみましょう。
							</p>
							<p>プロンプトの例</p>
							<ul>
								<li>
									<CodeBlock
										lang="md"
										code="サイト全体の配色を赤系にしてください"
									/>
								</li>
								<li>
									<CodeBlock
										lang="md"
										code="季節限定メニューを追加してください"
									/>
								</li>
								<li>
									<CodeBlock
										lang="md"
										code="グリッドレイアウトを使用して雑誌のようなデザインにしてください。"
									/>
								</li>
							</ul>
						</li>
					</ol>
				</section>

				<section>
					<h2>注意点</h2>
					<ul>
						<li>
							Bolt.newの無料プランでは1日あたり、1ヶ月あたりの使用量が制限されています。
						</li>
						<li>
							1ヶ月あたりの制限は最終課題を作成するには十分ですが、1日あたりの制限に引っかかった場合は次の日まで待ってください。
						</li>
					</ul>
				</section>
			</article>
		</div>
	);
}
