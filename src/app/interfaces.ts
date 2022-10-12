export interface ITechnology {
	name: string;
}

export interface ISkill {
	name: string;
}

export interface IProject {
	name: string;
	id?: number;
	imgURL: string;
	summary: string;
	tech: ITechnology[];
	skills: ISkill[];
}
