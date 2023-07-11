import React from "react";
import NoteList from "../components/noteList";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNoteAction } from "../redux/action/noteAction";

const DashboardScreen = () => {
  const dispatch = useDispatch();
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };
  const [showContent, setShowContent] = useState("no-content");

  useEffect(() => {
    const tem = JSON.parse(localStorage.getItem("notes"));

    {
      tem === null
        ? setShowContent("no-content")
        : setShowContent("with-content");
    }
  }, []);

  return (
    <div className="relative flex bg-[#FEFEFE] h-[100vh] flex-col">
      {/* Add new note */}
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">ADD NEW NOTE</h3>
          <div className=" w-[90%] mx-auto justify-center">
            <input
              type="text"
              name="title"
              value={note.title}
              onChange={handleChange}
              placeholder="Title here"
              className="input input-bordered w-full mt-4"
            />
            <label className="label">
              <span className="label-text-alt text-[#2C323B]">
                0/24 characters.
              </span>
            </label>
            <textarea
              name="content"
              className="textarea textarea-bordered w-full h-[150px]"
              placeholder="Descirption here.."
              value={note.content}
              onChange={handleChange}
            />
            <label className="label">
              <span className="label-text-alt text-[#2C323B]">
                0/320 characters.
              </span>
            </label>
          </div>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-primary"
              onClick={() => {
                //dispatch action
                dispatch(addNoteAction(note));
              }}
            >
              ADD NOTE
            </button>
            <button className="btn">CLOSE</button>
          </div>
        </form>
      </dialog>
      {/* Add new note ends here */}

      {showContent === "no-content" ? (
        <div className="flex flex-col h-[100vh] bg-slate-500">
          <h1 className="text-[200px]">hello</h1>
        </div>
      ) : (
        <NoteList />
      )}

      {/* Topbar */}
      <div className="fixed top-0 flex flex-row bg-primary justify-between w-full py-1">
        <h1 className="font-bold text-[32px] ml-4 self-center text-[#ffffff]">
          NoteTaker
        </h1>
        <button className="mr-4 text-[17px] self-center text-[#ffffff] hover:underline">
          Need Help?
        </button>
      </div>

      <button
        className="btn btn-primary fixed end-4 mt-[74vh] md:end-14 md:mt-[85vh] 2xl:mt-[87vh] h-[75px] w-[75px] rounded-[360px]"
        onClick={() => window.my_modal_1.showModal()}
      >
        <h1 className="text-white text-[42px]">+</h1>
      </button>

      {/* Topbar ends here */}
    </div>
  );
};

export default DashboardScreen;
