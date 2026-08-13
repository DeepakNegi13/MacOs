import githubData from "./github.js";
import Terminal from "./windows/Terminal.jsx";

const Github = () => {
	return (
		<Terminal>
			{githubData.map((e, idx) => {
				return (
					<p key={idx}>
						{e.id} : {e.description}
					</p>
				);
			})}
		</Terminal>
	);
};

export default Github;
