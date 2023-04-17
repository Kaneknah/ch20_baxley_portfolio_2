import React from "react";
import "./App.css";
import MainContainer from "./components/MainContainer";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<MainContainer />
		</BrowserRouter>
	);
}

export default App;
