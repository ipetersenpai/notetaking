//Initialstate
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
      return {
        notes: [...state, newNote],
      };
  }
};

export default noteReducer();
