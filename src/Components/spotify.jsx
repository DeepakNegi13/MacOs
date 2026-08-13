import React from "react";
import Terminal from "./windows/Terminal";
const spotify = () => {
	return (
		<div>
			<Terminal>
				<div className="spotify">
					{
						<iframe
							data-testid="embed-iframe"
							style={{ "border-radius": "12px" }}
							src="https://open.spotify.com/embed/playlist/17YXlpA1vgyURYow0lQtyo?utm_source=generator&theme=0&si=a7e5be3dc3264fae"
							width="100%"
							height="380"
							frameBorder="0"
							allowfullscreen="true"
							allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
							loading="eager"></iframe>
					}
				</div>
			</Terminal>
		</div>
	);
};

export default spotify;
