import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import classes from "./App.module.css";

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<div className={classes.container}>
				<Navbar />
			</div>
		</BrowserRouter>
	);
};

export default App;
