import { useState } from "react";
import { Rnd } from "react-rnd";

const Terminal = ({ children }) => {
	const isMobile = typeof window !== "undefined" && window.innerWidth <= 600;
	const defaultWidth = isMobile ? Math.min(350, window.innerWidth - 24) : 420;
	const defaultHeight = isMobile ? Math.min(320, window.innerHeight - 140) : 250;
	const defaultX = isMobile ? Math.max(12, (window.innerWidth - defaultWidth) / 2) : Math.max(20, window.innerWidth / 2 - 210);
	const defaultY = isMobile ? 55 : 120;

	const [fullPage , setFullPage] = useState(false);
	const clickOnFullPage = (e)=>{
		e.preventDefault();
		setFullPage(!fullPage);
	}
	return (

		<Rnd
			default={{
				x: defaultX,
				y: defaultY,
				width: defaultWidth,
				height: defaultHeight,


			}}
			// minWidth={280}
			// minHeight={150}
			// bounds="parent"
		>
			<div className="terminal">
				<div className="top">
					<div className="threeDot">
						<div className="circle1"></div>
						<div className="circle2"></div>
						<div className="circle3"></div>
					</div>
					<div className="name">Deepak Negi</div>
					<div className="fullPage" onClick={(e)=>{
						clickOnFullPage(e)
					}}>
						button
					</div>
				</div>
				<div className="main">{children}</div>
			</div>
		</Rnd> 
	);
};

export default Terminal;
