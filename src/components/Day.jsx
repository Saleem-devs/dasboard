import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { useStateContext } from "../contexts/ContextProvider";

const Day = ({ day, rowIdx }) => {
  const {
    currentColor,
    setDaySelected,
    setShowEventModal,
    filteredEvents,
    setSelectedEvent,
  } = useStateContext();

  const [currentDay, setCurrentDay] = useState(false);
  const [dayEvents, setDayEvents] = useState([]);

  useEffect(() => {
    if (day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")) {
      setCurrentDay(true);
    } else {
      setCurrentDay(false);
    }
  }, [day]);

  useEffect(() => {
    const events = filteredEvents.filter(
      (evt) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [filteredEvents, day]);

  const getCurrentDayClass = () => {
    return currentDay ? "text-white rounded-full w-7" : "";
  };

  return (
    <div className=" border border-gray-200 dark:border-gray-600 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1 h-[20px] dark:text-white ">
            {day.format("ddd").toUpperCase()}
          </p>
        )}

        <p
          className={`text-sm p-1 my-1 text-center dark:text-white ${getCurrentDayClass()}`}
          style={{ backgroundColor: currentDay ? currentColor : "" }}
        >
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
          >
            {evt.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Day;
