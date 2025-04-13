"use client";

import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

type CopyButtonProps = {
	text: string;
};

export function CopyButton({ text }: CopyButtonProps) {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(true);
			setTimeout(() => setCopied(false), 3000);
		} catch (err) {
			console.error("Failed to copy", err);
		}
	};

	return (
		<Button
			onClick={handleCopy}
			variant="outline"
			size="icon"
			className="absolute top-2 right-2"
		>
			{copied ? <Check color="green" /> : <Copy />}
		</Button>
	);
}
