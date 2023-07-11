//Initialstate
import { deleteNoteAction } from "../action/noteAction";
import { ADD_NOTE, DELETE_NOTE, FETCH_NOTE } from "../action/noteActionType";

const initialstate = {
  notes: [],
};

// Reducer
const noteReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_NOTE:
      //new note
      const newNote = {
        id: Math.random(),
        title: action.payload.title,
        content: action.payload.content,
      };
      const updatedNotes = [...state.notes, newNote];
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      return {
        notes: [...state.notes, newNote],
      };
    case FETCH_NOTE:
      return {
        notes: JSON.parse(localStorage.getItem("notes"))
          ? JSON.parse(localStorage.getItem("notes"))
          : [],
      };
    case DELETE_NOTE:
      const filteredNotes = state.notes.filter(
        (note) => note.id !== action.payload
      );

      //resave to localstorage
      localStorage.setItem("notes", JSON.stringify(filteredNotes));
      return {
        ...state,
        notes: filteredNotes,
      };
    default:
      return state;
  }
};

export default noteReducer;
