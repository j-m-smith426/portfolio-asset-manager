import React, { FC, Fragment, useState } from "react";
import { saveSkill, saveTechnology } from "../Api";
import { ISkill, ITechnology } from "../app/interfaces";

interface IProps {
	submit: string;
}

const NameSubmit: FC<IProps> = (props) => {
	const [name, setName] = useState("");

	let submitFunc = saveTechnology;
	let payload: ITechnology | ISkill = {
		name,
	};
	if (props.submit === "Skills") {
		submitFunc = saveSkill;
	}

	const handleSubmit = () => {
		submitFunc(payload);
		console.log("Submitted " + name);
		setName("");
	};

	return (
		<Fragment>
			<div className="create form-group">
				<label htmlFor="name">Name: </label>
				<input
					type="text"
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div className="btn--container">
				<input
					type="button"
					value="Submit"
					className="btn btn--submit"
					onClick={() => handleSubmit()}
				/>
			</div>
		</Fragment>
	);
};

export default NameSubmit;
