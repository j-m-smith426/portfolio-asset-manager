// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getDatabase, push, ref, set } from "firebase/database";
import { IProject, ISkill, ITechnology } from "./app/interfaces";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
	REACT_APP_APIKEY,
	REACT_APP_AUTH_DOMAIN,
	REACT_APP_DATABASE_URL,
	REACT_APP_PROJECT_ID,
	REACT_APP_STORAGE_BUCKET,
	REACT_APP_MESSAGING_SENDER_ID,
	REACT_APP_APP_ID,
} = process.env;

// Your web app's Firebase configuration
const firebaseConfig = {
	// apiKey: REACT_APP_APIKEY,
	// authDomain: REACT_APP_AUTH_DOMAIN,
	databaseURL: REACT_APP_DATABASE_URL,
	projectId: REACT_APP_PROJECT_ID,
	// appId: REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const technologyRef = ref(db, "technology");
export const skillRef = ref(db, "skill");
push(skillRef);
export const projectRef = ref(db, "project");
push(projectRef);

export const saveTechnology = (tech: ITechnology) => {
	push(ref(db, "technology"), tech);
};

export const saveSkill = (skill: ISkill) => {
	push(ref(db, "skill"), skill);
};

export const saveProject = (project: IProject) => {
	push(ref(db, "project"), project);
};
