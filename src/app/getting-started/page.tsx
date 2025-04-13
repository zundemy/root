export default function Page() {
	return (
		<article>
			<h1>Webサイトを作る</h1>

			<section>
				<h2>Bolt.newを使ってみよう</h2>
				<p>
					Bolt.newは、AIを活用したWebサイト作成ツールです。
					プログラミングの知識がなくても、自然な言葉でWebサイトを作成することができます。
				</p>
			</section>

			<section>
				<h2>手順</h2>
				<ol>
					<li>
						<div>
							<h3>1. Bolt.newにアクセス</h3>
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
						</div>
					</li>

					<li>
						<div>
							<h3>2. アカウント作成</h3>
							<p>
								Googleアカウントまたはメールアドレスでアカウントを作成してください。
							</p>
						</div>
					</li>

					<li>
						<div>
							<h3>3. サンプルプロンプトを実行</h3>
							<p>
								以下のプロンプトをコピーして、Bolt.newのプロンプト入力欄に貼り付けてください：
							</p>
							<pre>
								{`シンプルでモダンなポートフォリオサイトを作成してください。
以下の要素を含めてください：
- 自己紹介
- スキル一覧
- プロジェクト紹介
- 連絡先情報

デザインは以下の条件でお願いします：
- カラーパレットは青系を基調とする
- レスポンシブデザインに対応
- アニメーション効果を適度に使用`}
							</pre>
						</div>
					</li>

					<li>
						<div>
							<h3>4. カスタマイズ</h3>
							<p>
								生成されたWebサイトを自由にカスタマイズしてみましょう。
								以下のような変更が可能です：
							</p>
							<ul>
								<li>色やフォントの変更</li>
								<li>コンテンツの追加・編集</li>
								<li>レイアウトの調整</li>
								<li>画像の追加</li>
							</ul>
						</div>
					</li>
				</ol>
			</section>
		</article>
	);
}
