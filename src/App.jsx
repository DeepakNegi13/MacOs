import "./app.scss";
import Doc from "./Components/Doc";
import NavBar from "./Components/NavBar";
// import Terminal from './Components/windows/Terminal';
// import Github from './Components/Github.jsx';
const App = () => {
	return (
		<>
			<main>
				<NavBar />
				<Doc />
			</main>
		</>
	);
};

export default App;
