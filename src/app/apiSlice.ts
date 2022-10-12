import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProject, ISkill, ITechnology } from "./interfaces";
import { RootState } from "./store";

interface IReducerState {
	tech: ITechnology[];
	skills: ISkill[];
	projects: IProject[];
	selected: string;
}

const initialState: IReducerState = {
	tech: [],
	skills: [],
	projects: [],
	selected: "Technology",
};

export const updateTechAction = createAction<ITechnology[] | undefined>(
	"api/updateTech"
);
export const updateSkillsAction = createAction<ISkill[] | undefined>(
	"api/updateSkills"
);
export const updateProjectsAction = createAction<IProject[] | undefined>(
	"api/updateProjects"
);
export const updateSelectedAction = createAction<string>("api/selected");

export const apiSlice = createSlice({
	name: "api",
	initialState,
	reducers: {
		updateTech: (state, action: PayloadAction<ITechnology[]>) => {
			state.tech = action.payload;
		},
		updateSkills: (state, action: PayloadAction<ISkill[]>) => {
			state.skills = action.payload;
		},
		updateProjects: (state, action: PayloadAction<IProject[]>) => {
			state.projects = action.payload;
		},
		updateSelected: (state, action: PayloadAction<string>) => {
			console.log(action);
			state.selected = action.payload;
		},
	},
});

export const { updateTech, updateProjects, updateSkills, updateSelected } =
	apiSlice.actions;
export const SelectTech = (state: RootState) => state.api.tech;
export const SelectSkills = (state: RootState) => state.api.skills;
export const SelectProjects = (state: RootState) => state.api.projects;

export default apiSlice.reducer;
