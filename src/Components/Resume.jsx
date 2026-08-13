import React from "react";
import Terminal from "./windows/Terminal";
import "/public/resume.pdf";
const Resume = () => {
	return (
		<div>
			<Terminal>
				{/* Markdown Resume */}
				<iframe
					src="/resume.pdf"
					width="100%"
					height="600px"
					style={{ border: "none", borderRadius: "12px" }}></iframe>
			</Terminal>
		</div>
	);
};

export default Resume;
