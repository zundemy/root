import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
	return (
		<div className="flex h-full flex-col items-center justify-center space-y-8">
			<div className="text-center leading-4">
				<p>宮城大学の1年生必修科目</p>
				<p>コンピューターリテラシー(2025)</p>
				<p>第12回 ~ 第14回の授業資料です。</p>
				<p>生成AIを使用してwebサイトを作成してみましょう。</p>
			</div>
			<Button size="lg" className="w-28" asChild>
				<Link href="/introduction">始める</Link>
			</Button>
		</div>
	);
}
