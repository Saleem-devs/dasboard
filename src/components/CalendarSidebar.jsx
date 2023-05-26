import React, { useState } from "react";
import CreateEventBtn from "./CreateEventBtn";
import SmallCalendar from "./SmallCalendar";
import { MdCalendarMonth } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";

const CalendarSidebar = () => {
  const { currentColor } = useStateContext();
  const [showSmallCalendar, setShowSmallCalendar] = useState(false);
  return (
    <div className="mt-10">
      <div className="flex gap-4 items-end">
        <CreateEventBtn />
        <button
          className="text-gray-400 text-3xl"
          style={{ color: currentColor }}
          onClick={() =>
            setShowSmallCalendar(
              (prevShowSmallCalendar) => !prevShowSmallCalendar
            )
          }
        >
          <MdCalendarMonth />
        </button>
      </div>
      {showSmallCalendar && <SmallCalendar />}
    </div>
  );
};

export default CalendarSidebar;
