import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSelected, updateSelectedAction } from "../../app/apiSlice";
import { RootState } from "../../app/store";
import "./Selector.scss";

const Selector: FC = (props) => {
	const selected = useSelector((state: RootState) => state.api.selected);
	const dispatch = useDispatch();

	return (
		<div className="selector">
			<label htmlFor="select_cat" className="selector__label">
				Select a Catagory:
			</label>
			<select
				name="catagory"
				id="select_cat"
				className="selector__select"
				value={selected}
				onChange={(e) => dispatch(updateSelected(e.currentTarget.value))}
			>
				<option value="Technology">Technology</option>
				<option value="Skills">Skills</option>
				<option value="Projects">Projects</option>
			</select>
		</div>
	);
};

export default Selector;
