import React, { Fragment, useState } from "react";
import NameSubmit from "../components/NameSubmit";
import Selector from "../components/selector/Selector";
import "./Pages.scss";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import ProjectSubmit from "../components/ProjectSubmit";

const Create = () => {
	const selected = useSelector((state: RootState) => state.api.selected);

	return (
		<Fragment>
			<Selector />
			{selected !== "Projects" ? (
				<NameSubmit submit={selected} />
			) : (
				<ProjectSubmit />
			)}
		</Fragment>
	);
};

export default Create;
