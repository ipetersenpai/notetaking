import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; //{useSelectpr} help us to grab data from storage
import { deleteNoteAction, fetchNotesAction } from "../redux/action/noteAction";
const NoteList = () => {
  //dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNotesAction());
  }, []);
  //get data from store
  const notes = useSelector((storeData) => {
    return storeData.notes;
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex flex-row flex-wrap w-[360px] md:w-[1210px] 2xl:w-[97%] mx-auto mt-[60px] ">
      {notes.map((notes) => (
        <div
          key={notes.id}
          className="h-[290px] bg-[#D8D8FA] w-[270px] rounded-lg m-4 hover:bg-[#B3B3F8] shadow-md shadow-opacity-100"
        >
          <div className="dropdown">
            <div className="dropdown-trigger">
              <label
                tabIndex={0}
                className="flex flex-col h-[290px] w-[270px] p-4 cursor-pointer"
                onClick={toggleDropdown}
              >
                <h1 className="font-bold text-[20px] text-black mb-2 text-left">
                  {notes.title}
                </h1>
                <p className="text-[14px] text-black text-left">
                  {notes.content}
                </p>
              </label>
            </div>
            {dropdownOpen && (
              <div className="dropdown-right">
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-25"
                >
                  <li>
                    <a
                      onClick={() => {
                        console.log("edit mego");
                        setDropdownOpen(false);
                      }}
                    >
                      edit
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        dispatch(deleteNoteAction(notes.id));
                        setDropdownOpen(false);
                      }}
                    >
                      Delete
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
