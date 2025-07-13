import taiwaCoffee from "@/assets/taiwa-coffee.png";
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
					{ label: "やること" },
				]}
			/>
			<article className="mt-12">
				<h1>やること</h1>

				<p>
					生成AIツール
					<LinkAsButton href="https://bolt.new" external>
						bolt
					</LinkAsButton>
					を使用してWebサイトを作成し、インターネットに公開する方法を学びます。
				</p>

				<section>
					<h2>前提知識</h2>
					<ul>
						<li>PCの基本的な操作を理解している</li>
						<li>プログラミングなどの知識はほとんど無くてok</li>
					</ul>
				</section>

				<section>
					<h2>実際に作るもののサンプル</h2>
					<p>作れるものの一例としてカフェのサイトを作りました。</p>
					<LinkAsButton
						href="https://dapper-squirrel-7a7bef.netlify.app"
						external
					>
						サンプルのカフェのウェブサイト
					</LinkAsButton>
					<Image
						src={taiwaCoffee}
						alt="サンプルのカフェのウェブサイトのトップ画面"
					/>
					<p>準備が出来たら、早速Webサイトを作って行きましょう。</p>
				</section>
			</article>
		</div>
	);
}
