import { FC } from "react";
import "./Selector.scss";

const Selector: FC = () => {
	return (
		<div className="selector">
			<label htmlFor="select_cat" className="selector__label">
				Select a Catagory:
			</label>
			<select name="catagory" id="select_cat" className="selector__select">
				<option value="Technology" selected>
					Technology
				</option>
				<option value="Skills">Skills</option>
				<option value="Projects">Projects</option>
			</select>
		</div>
	);
};

export default Selector;
