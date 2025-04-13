// see: https://shiki.style/packages/next

import { CopyButton } from "@/components/copy-button";
import { type BundledLanguage, codeToHtml } from "shiki";

type CodeBlockProps = {
	lang: BundledLanguage;
	code: string;
};

export async function CodeBlock({ lang, code }: CodeBlockProps) {
	const out = await codeToHtml(code, {
		lang: lang,
		theme: "dark-plus",
	});

	return (
		<div className="relative">
			{/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
			<div dangerouslySetInnerHTML={{ __html: out }} />
			<CopyButton text={code} />
		</div>
	);
}
