import React, { useState } from "react";
import Github from "./Github.jsx";
import Notes from "./Notes.jsx";
import Terminal from "./windows/terminal.jsx";
const Doc = () => {
	const [onGit, setOnGit] = useState(false);
	const githubClick = (e) => {
		e.preventDefault();
		setOnGit(!onGit);
		console.log("git hub is clicked");
	};
	const [onNotes, setOnNotes] = useState(false);
	let clickOnNotes = (e) => {
		console.log("hello");
		e.preventDefault();
		setOnNotes(!onNotes);
	};
	return (
		<>
			{onGit && <Github />}
			{onNotes && <Notes />}
			<footer>
				<a
					href="/"
					onClick={(e) => {
						githubClick(e);
					}}
				>
					<div className="git icon">
						<img src="/doc-icons/github.svg" alt="" />
					</div>
				</a>
				<div className="calendar icon">
					<img src="/doc-icons/calender.svg" alt="" />
				</div>
				<div className="cli icon">
					<img src="/doc-icons/cli.svg" alt="" />
				</div>
				<div className="link icon">
					<img src="/doc-icons/link.svg" alt="" />
				</div>
				<div className="mail icon">
					<img src="/doc-icons/mail.svg" alt="" />
				</div>
				<div
					className="note icon"
					onClick={(e) => {
						clickOnNotes(e);
					}}
				>
					<img src="/doc-icons/note.svg" alt="" />
				</div>

				<div className="pdf icon">
					<img src="/doc-icons/pdf.svg" alt="" />
				</div>
				<div className="spotify icon">
					<img src="/doc-icons/spotify.svg" alt="" />
				</div>
			</footer>
		</>
	);
};

export default Doc;
