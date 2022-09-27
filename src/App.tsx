import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import "./App1.css";
import Selector from "./components/selector/Selector";

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<div className="container">
				<Navbar />
				<Selector />
			</div>
		</BrowserRouter>
	);
};

export default App;
