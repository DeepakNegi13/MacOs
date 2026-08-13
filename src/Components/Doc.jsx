import { useState } from "react";
import Github from "./Github.jsx";
import Notes from "./Notes.jsx";
import Spotify from "./spotify.jsx";
import Resume from "./Resume.jsx";
const Doc = () => {
	const [onGit, setOnGit] = useState(false);
	const githubClick = (e) => {
		e.preventDefault();
		setOnGit(!onGit);
	};

	const [onNotes, setOnNotes] = useState(false);
	let clickOnNotes = (e) => {
		e.preventDefault();
		setOnNotes(!onNotes);
	};

	const [onSpotify, setOnSpotify] = useState(false);
	let clickOnSpotify = (e) => {
		e.preventDefault();
		setOnSpotify(!onSpotify);
	};

	const [onResume, setOnResume] = useState(false);
	let clickOnResume = (e) => {
		e.preventDefault();
		setOnResume(!onResume);
	};

	const [url, setUrl] = useState("");
	let clickOnLink = (e) => {
		e.preventDefault();
		setUrl(prompt("Enter the URL of the website you want to open:"));
		window.open(url, "_blank");
	};

	return (
		<>
			{onGit && <Github />}
			{onNotes && <Notes />}
			{onSpotify && <Spotify />}
			{onResume && <Resume />}

			<footer>
				<a
					href="/"
					onClick={(e) => {
						githubClick(e);
					}}>
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
				<div
					className="link icon"
					onClick={(e) => {
						clickOnLink(e);
					}}>
					<img src="/doc-icons/link.svg" alt="" />
				</div>
				<div className="mail icon">
					<img src="/doc-icons/mail.svg" alt="" />
				</div>
				<div
					className="note icon"
					onClick={(e) => {
						clickOnNotes(e);
					}}>
					<img src="/doc-icons/note.svg" alt="" />
				</div>

				<div
					className="pdf icon"
					onClick={(e) => {
						clickOnResume(e);
					}}>
					<img src="/doc-icons/pdf.svg" alt="" />
				</div>
				<div
					className="spotify icon"
					onClick={(e) => {
						clickOnSpotify(e);
					}}>
					<img src="/doc-icons/spotify.svg" alt="" />
				</div>
			</footer>
		</>
	);
};

export default Doc;
