import React, { Fragment, useState } from "react";
import NameSubmit from "../components/NameSubmit";
import Selector from "../components/selector/Selector";
import "./Pages.scss";
import { saveProject, saveSkill, saveTechnology } from "../Api";
import { IProject, ISkill, ITechnology } from "../app/interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const Create = () => {
	const selected = useSelector((state: RootState) => state.api.selected);

	return (
		<Fragment>
			<Selector />
			{selected != "Projects" && <NameSubmit submit={selected} />}
		</Fragment>
	);
};

export default Create;
