import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SelectTech } from "../app/apiSlice";
import { IProject, ISkill, ITechnology } from "../app/interfaces";
import { RootState } from "../app/store";

import "./Pages.scss";

const Display: FC = (props) => {
	const selected = useSelector((state: RootState) => state.api.selected);
	const currentTechArray: ITechnology[] = useSelector(
		(state: RootState) => state.api.tech
	);

	const currentSkillArray: ISkill[] = useSelector(
		(state: RootState) => state.api.skills
	);

	const currentProjectArray: IProject[] = useSelector(
		(state: RootState) => state.api.projects
	);

	let currentArray: any[] = [];
	switch (selected) {
		case "Technology":
			currentArray = currentTechArray;
			break;
		case "Skilld":
			currentArray = currentSkillArray;
			break;
		case "Projects":
			currentArray = currentProjectArray;
			break;
	}
	return (
		<div className="display">
			<h2>{selected}</h2>
			<ul className="display__list">
				{currentArray.map((tech) => (
					<li key={tech.name} className="display__list--item ">
						{tech.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Display;
