import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Terminal from "./windows/Terminal";

const Notes = () => {
	const [markdown, setMarkdown] = useState("");

	useEffect(() => {
		fetch("/note.txt")
			.then((res) => res.text())
			.then((text) => setMarkdown(text));
	}, []);

	return (
		<Terminal>
			<div className="notes-content">
				<SyntaxHighlighter
					language="typescript"
					style={atomOneDark}
					customStyle={{
						background: "transparent",
						padding: "8px 12px",
						margin: 0,
						fontSize: "13px",
						lineHeight: "1.5",
						overflowX: "hidden",
					}}
				>
					{markdown}
				</SyntaxHighlighter>
			</div>
		</Terminal>
	);
};

export default Notes;
