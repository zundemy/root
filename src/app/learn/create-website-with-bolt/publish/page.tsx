import boltNewCreated from "@/assets/bolt-new-created.png";
import boltNewPublished from "@/assets/bolt-new-published.png";
import { AppBreadcrumb } from "@/components/app-breadcrumb";
import { LinkAsButton } from "@/components/link-as-button";
import Image from "next/image";

export default function Page() {
	return (
		<div>
			<AppBreadcrumb
				items={[
					{ label: "Home", href: "/" },
					{ label: "bolt", href: "/learn/create-website-with-bolt" },
					{ label: "Webサイトを公開する" },
				]}
			/>
			<article className="mt-12">
				<h1>Webサイトを公開する</h1>

				<section>
					<h2>Netlifyにデプロイしてみよう</h2>
					<p>
						前章で作成したWebサイトはインターネットに公開されていないため、自分以外の人がアクセスできない状態です。
					</p>
					<p>
						Webサイトを公開するにはサーバーにhtmlファイルなどをアップロードしてドメインを紐づけるなどの手順が必要ですが、boltではボタンひとつでNetlifyにアップロードして公開が可能です。
					</p>
					<p>
						<LinkAsButton href="https://www.netlify.com/" external>
							Netlify
						</LinkAsButton>
						は、Webサイトをインターネットに公開出来るサービスです。
					</p>
				</section>

				<section>
					<h2>手順</h2>
					<ol>
						<li>
							<h3>Deployボタンをクリック</h3>
							<p>画面右上のDeployボタンをクリックしてください。</p>
							<Image
								src={boltNewCreated}
								alt="Bolt.newでサイトを作成した画面"
							/>
						</li>

						<li>
							<h3>URLを確認</h3>
							<p>
								デプロイが完了すると、チャットエリアにURLが表示されます。あなたが作成したサイトがインターネットに公開され、このURLからアクセス出来るようになりました。
							</p>
							<p>
								以下の画面キャプチャでは隠していますが、URLは2つ出力されるので短い方のURLにアクセスして下さい。
							</p>
							<p>
								長い方はNetlifyでアカウントを作成して独自ドメインを登録するなどの設定をするために使用するものです。
							</p>
							<Image
								src={boltNewPublished}
								alt="Bolt.newでサイトを公開した画面"
							/>
						</li>

						<li>
							<h3>再デプロイ</h3>
							<p>
								上記の手順で公開後、追加で変更を加えた場合は再度Deployボタンを押せばURLはそのままで先ほど公開したWebサイトの内容が更新されます。
							</p>
						</li>
					</ol>
				</section>

				<section>
					<h2>注意点</h2>
					<ul>
						<li>個人情報や機密情報が含まれていないか確認する</li>
						<li>
							著作権に問題のある画像やコンテンツを使用していないか確認する
						</li>
					</ul>
				</section>

				<p className="mt-8">
					ここまでの内容で最終課題を作成することは可能ですが、出力されるコードを直接編集出来るとより細かい調整が可能です。Web技術に興味が湧いた方は是非次章の内容も挑戦してみて下さい。
				</p>
			</article>
		</div>
	);
}
