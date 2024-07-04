import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
function App() {
	return (
		<div className="App">
			<Canvas camera={{ position: [0, 2, 15], fov: 30 }} shadows>
				<Experience />
			</Canvas>
		</div>
	);
}

export default App;
