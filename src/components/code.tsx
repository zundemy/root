// see: https://rehype-pretty.pages.dev/
// see: https://github.com/rehype-pretty/rehype-pretty-code/blob/master/examples/next/src/app/code.tsx

import { transformerCopyButton } from "@rehype-pretty/transformers";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export async function Code({ code }: { code: string }) {
	const highlightedCode = await highlightCode(code);
	return (
		<section
			// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
			dangerouslySetInnerHTML={{
				__html: highlightedCode,
			}}
		/>
	);
}

async function highlightCode(code: string) {
	const file = await unified()
		.use(remarkParse)
		.use(remarkRehype)
		.use(rehypePrettyCode, {
			theme: "dark-plus",
			transformers: [
				transformerCopyButton({
					visibility: "always",
					feedbackDuration: 3_000,
				}),
			],
		})
		.use(rehypeStringify)
		.process(code);

	return String(file);
}
