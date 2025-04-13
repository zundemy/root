import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex h-full flex-col items-center justify-center space-y-8">
			<div>
				<p>このサイトの説明文を入れる。</p>
				<p>このサイトの説明文を入れる。</p>
			</div>
			<Button size="lg" className="w-28" asChild>
				<Link href="/introduction">始める</Link>
			</Button>
		</div>
	);
}
