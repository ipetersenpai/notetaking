import { createStore } from "redux";
import noteReducer from "../reducer/noteReducer";

const store = createStore(noteReducer);

export default store;
