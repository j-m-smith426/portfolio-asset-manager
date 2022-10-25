import React, { Fragment, useState } from "react";

const ProjectSubmit = () => {
	const [pictureType, setPictureType] = useState("Local");
	return (
		<Fragment>
			<div className="form-group">
				<label htmlFor="">Title: </label>
				<input type="text" name="" id="" />
			</div>
			<div className="form-group">
				{/* <h4>Picture</h4> */}
				<input
					type="radio"
					value={"Local"}
					name="picType"
					checked={pictureType === "Local"}
					id=""
					onChange={(e) => setPictureType(e.target.value)}
				/>
				<label htmlFor="">Local</label>
				<input
					type="radio"
					value={"Web"}
					name="picType"
					checked={pictureType === "Web"}
					id=""
					onChange={(e) => setPictureType(e.target.value)}
				/>
				<label htmlFor="">Web</label>
				{pictureType === "Local" ? (
					<>
						<label htmlFor="">File:</label>
						<input type="file" name="" id="" />
					</>
				) : (
					<>
						<label htmlFor="">URL:</label>
						<input type="text" name="" id="" />
					</>
				)}
			</div>
			<div className="form-group">
				<div className="tech-list"></div>
				<div className="tech-selected"></div>
			</div>
			<div className="form-group">
				<label htmlFor="">Summary: </label>
				<input type="text" multiple name="" id="" />
			</div>
		</Fragment>
	);
};

export default ProjectSubmit;
