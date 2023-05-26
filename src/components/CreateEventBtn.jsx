import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const CreateEventBtn = () => {
  const { currentColor, setShowEventModal } = useStateContext();
  return (
    <button
      className="text-white py-1.5 px-4 rounded-md flex items-center gap-2 hover:shadow"
      style={{ backgroundColor: currentColor }}
      onClick={() => setShowEventModal(true)}
    >
      <span className="font-bold text-2xl">+</span>
      <span>Create</span>
    </button>
  );
};

export default CreateEventBtn;
