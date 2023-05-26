import React, { useState } from "react";
import {
  MdDragHandle,
  MdClose,
  MdSchedule,
  MdSegment,
  MdDelete,
  MdCheck,
  MdBookmarkBorder,
} from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";

const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];

const EventModal = () => {
  const {
    setShowEventModal,
    daySelected,
    currentColor,
    dispatchCalEvent,
    selectedEvent,
  } = useStateContext();
  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );

  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }
    setShowEventModal(false);
  }

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-[300px] md:w-[500px]">
        <header className="bg-gray-100 px-4 py-4 flex justify-between items-center">
          <button className="text-gray-400 text-2xl">
            <MdDragHandle />
          </button>
          <div>
            {selectedEvent && (
              <button
                onClick={() => {
                  dispatchCalEvent({
                    type: "delete",
                    payload: selectedEvent,
                  });
                  setShowEventModal(false);
                }}
                className=" text-gray-400 text-2xl"
              >
                <MdDelete />
              </button>
            )}
            <button
              className="text-gray-400 text-2xl"
              onClick={() => setShowEventModal(false)}
            >
              <MdClose />
            </button>
          </div>
        </header>

        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-400"
            />
            <button className="text-gray-400 text-2xl">
              <MdSchedule />
            </button>
            <p>{daySelected.format("dddd, MMMM DD, YYYY")}</p>
            <button className="text-gray-400 text-2xl">
              <MdSegment />
            </button>
            <input
              type="text"
              name="description"
              placeholder="Add description"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-400"
            />
            <button className=" text-2xl text-gray-400">
              <MdBookmarkBorder />
            </button>
            <div className="flex gap-x-2">
              {labelsClasses.map((lblClass, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedLabel(lblClass)}
                  className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {selectedLabel === lblClass && (
                    <span className=" text-white text-sm">
                      <MdCheck />
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        <footer className="flex justify-end w-100 border-t p-3 mt-5">
          <button
            type="submit"
            className="px-4 py-1.5 rounded-md text-white "
            style={{ backgroundColor: currentColor }}
            onClick={handleSubmit}
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
};

export default EventModal;
