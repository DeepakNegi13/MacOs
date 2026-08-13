import { useState } from "react";
import Terminal from "./windows/Terminal";
const NavBar = () => {
	const formatter = new Intl.DateTimeFormat("en-IN", {
		weekday: "short", // "Wed"
		month: "short", // "Aug"
		day: "numeric", // "5"
		// year: "numeric", // "2026"
		hour: "numeric", // "9"
		minute: "2-digit", // "30"
		hour12: false, // "PM"
	});

	const shortDate = formatter.format(new Date());
	// Output: "Wed, 5 Aug 2026, 9:30 pm"

	const [terminalOn, setTerminalOn] = useState(false);
	const onTreminal = (e) => {
		e.preventDefault();
		setTerminalOn(!terminalOn);
	};
	return (
		<>
			{terminalOn && <Terminal />}
			<header>
				<div className="leftPortion">
					<div>
						<img src="/navbar-icons/apple.svg" alt="" />
					</div>

					<div className="dropDown">
						<select name="" id="option">
							<option value="">Deepak</option>
							<option value="">File</option>
							<option value="">Window</option>
							<option
								value=""
								onClick={(e) => {
									onTreminal(e);
								}}>
								Terminal
							</option>
						</select>
					</div>
					<a href="">Deepak Negi</a>
					<a href="">File</a>
					<a href="">Window</a>
					<a
						href=""
						onClick={(e) => {
							onTreminal(e);
						}}>
						Terminal
					</a>
				</div>
				<div className="rightPortion">
					<div>
						<img src="/navbar-icons/wifi.svg" alt="" />
					</div>
					{shortDate}
				</div>
			</header>
		</>
	);
};

export default NavBar;
