import React from "react";
import { Rnd } from "react-rnd";

const Terminal = ({ children }) => {
	return (
		<Rnd
			default={{
				x: 500,
				y: 200,
				width: 320, // Sets the default width
				height: 200, // Sets the default height
			}}
		>
			<div className="terminal">
				<div className="top">
					<div className="threeDot">
						<div className="circle1"></div>
						<div className="circle2"></div>
						<div className="circle3"></div>
					</div>
					<div className="name">Deepak Negi</div>
				</div>
				<div className="main">{children}</div>
			</div>
		</Rnd> 
	);
};

export default Terminal;
