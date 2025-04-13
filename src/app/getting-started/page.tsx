import { Code } from "@/components/code";

const exampleSnippets = [
	{
		title: "With line numbers",
		snippet: `
  \`\`\`ts {4} showLineNumbers
  const add = (a: number, b: number): number => a + b;
  \`\`\`
  `,
	},
	{
		title: "With title and line numbers",
		snippet: `
  \`\`\`rust title="fib.erl" showLineNumbers
  -spec is_palindrome(X :: integer()) -> boolean().
  -import(lists, [reverse/1]).
  
  is_palindrome(X) ->
	  S = integer_to_list(X),
	  R = reverse(S),
	  S =:= R.
  \`\`\`
  `,
	},
	{
		title: "With title, line numbers, and character highlighting",
		snippet: `
  \`\`\`elixir title="fib.ex" showLineNumbers /palindrome/#v
  defmodule Solution do
	@spec is_palindrome(x :: integer) :: boolean
	def is_palindrome(x) when x < 0, do: false
	def is_palindrome(x), do: do_is_palindrome(x, get_base_10(x, 1))
  
	defp do_is_palindrome(x, b10) when b10 > 1,
	  do: get_first_digit(x, b10) == rem(x, 10) and do_is_palindrome(div(x, 10), div(b10, 100))
  
	defp do_is_palindrome(_, _), do: true
  
	defp get_first_digit(n, b10), do: div(n, b10) |> rem(10)
  
	defp get_base_10(n, b10) when n >= b10, do: get_base_10(n, b10 * 10)
	defp get_base_10(n, b10), do: div(b10, 10)
  end
  \`\`\``,
	},
];

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
						</div>
					</li>

					<li>
						<div>
							<h3>アカウント作成</h3>
							<p>
								Googleアカウントまたはメールアドレスでアカウントを作成してください。
							</p>
						</div>
					</li>

					<li>
						<div>
							<h3>サンプルプロンプトを実行</h3>
							<p>
								以下のプロンプトをコピーして、Bolt.newのプロンプト入力欄に貼り付けてください：
							</p>
							<Code
								code={`
\`\`\`txt
以下の条件を満たすWebサイトを作成してください
- viteを使用し、index.html, style.cssのみでjavascriptは使用しないシンプルな構成にしてください。
- htmlにlinkタグを追加してstyle.cssを読み込んでください。
- クラシックで落ち着いた雰囲気の喫茶店のサイトを作成してください。
- コンセプト、お知らせ、メニュー、お問い合わせのセクションを入れてください。
- 適度に画像を使用してください。
\`\`\`
								`}
							/>
						</div>
					</li>

					<li>
						<div>
							<h3>カスタマイズ</h3>
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
