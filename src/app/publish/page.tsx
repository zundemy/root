import boltNewCreated from "@/assets/bolt-new-created.png";
import boltNewPublished from "@/assets/bolt-new-published.png";
import Image from "next/image";

export default function Page() {
	return (
		<article>
			<h1>Webサイトを公開する</h1>

			<section>
				<h2>Netlifyにデプロイしてみよう</h2>
				<p>
					前章で作成したWebサイトはインターネットに公開されていないため、自分以外の人がアクセスできない状態です。
				</p>
				<p>
					Webサイトを公開するにはサーバーにhtmlファイルなどをアップロードしてドメインを紐づけるなどの手順が必要ですが、Bolt.newではボタンひとつでNetlifyにアップロードして公開が可能です。
				</p>
				<p>Netlifyは、Webサイトをホスティング出来るサービスです。</p>
			</section>

			<section>
				<h2>手順</h2>
				<ol>
					<li>
						<h3>Deployボタンをクリック</h3>
						<p>画面右上のDeployボタンをクリックしてください。</p>
						<Image src={boltNewCreated} alt="Bolt.newでサイトを作成した画面" />
					</li>

					<li>
						<h3>URLを確認</h3>
						<p>
							デプロイが完了すると、URLが表示されます。あなたが作成したサイトがインターネットに公開され、このURLからアクセス出来るようになりました。
						</p>
						<Image
							src={boltNewPublished}
							alt="Bolt.newでサイトを公開した画面"
						/>
					</li>
				</ol>
			</section>

			<section>
				<h2>注意点</h2>
				<ul>
					<li>個人情報や機密情報が含まれていないか確認する</li>
					<li>著作権に問題のある画像やコンテンツを使用していないか確認する</li>
				</ul>
			</section>
		</article>
	);
}
