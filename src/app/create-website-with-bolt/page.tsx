import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
	return (
		<div className="flex h-full flex-col items-center justify-center space-y-8">
			<div className="text-center leading-4">
				<p>生成AIを使用してwebサイトを作成してみましょう。</p>
			</div>
			<Button size="lg" className="w-28" asChild>
				<Link
					href="/create-website-with-bolt/introduction"
					className="no-underline"
				>
					始める
				</Link>
			</Button>
		</div>
	);
}
