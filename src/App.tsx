import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import "./App1.css";
import Selector from "./components/selector/Selector";
import Display from "./pages/Display";
import { technologyRef, skillRef, projectRef } from "./Api";
import { onValue } from "@firebase/database";
import { useDispatch } from "react-redux";
import {
	updateProjectsAction,
	updateSkillsAction,
	updateTechAction,
} from "./app/apiSlice";
import { IProject, ISkill, ITechnology } from "./app/interfaces";
import Create from "./pages/Create";

const App: React.FC = () => {
	const dispatch = useDispatch();
	onValue(technologyRef, (snapshot) => {
		const data: ITechnology[] =
			(snapshot.val() && Object.values(snapshot.val())) || [];
		dispatch(updateTechAction(data));
	});

	onValue(skillRef, (snapshot) => {
		const data: ISkill[] =
			(snapshot.val() && Object.values(snapshot.val())) || [];
		dispatch(updateSkillsAction(data));
	});

	onValue(projectRef, (snapshot) => {
		const data: IProject[] =
			(snapshot.val() && Object.values(snapshot.val())) || [];
		dispatch(updateProjectsAction(data));
	});
	return (
		<BrowserRouter>
			<div className="container">
				<Navbar />
				<Create />
				<Display />
			</div>
		</BrowserRouter>
	);
};

export default App;
function updateSkillAction(data: ISkill[]): any {
	throw new Error("Function not implemented.");
}
