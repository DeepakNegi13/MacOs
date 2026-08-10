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
	return (
		<header>
			<div className="leftPortion">
				<div>
					<img src="/navbar-icons/apple.svg" alt="" />
				</div>

				<div className="dropDown">
					{/* <label htmlFor="option">
						<img className="threeDot" src="/threedot.svg" alt="" />
					</label> */}
					<select name="" id="option">
						<option value="">
							Deepak 
						</option>
						<option value="">
							File
						</option>
						<option value="">
							Window
						</option>
						<option value="">
							Terminal
						</option>
					</select>
				</div>
				<a href="">Deepak Negi</a>
				<a href="">File</a>
				<a href="">Window</a>
				<a href="">Terminal</a>
			</div>
			<div className="rightPortion">
				<div>
					<img src="/navbar-icons/wifi.svg" alt="" />
				</div>
				{shortDate}
			</div>
		</header>
	);
};

export default NavBar;
