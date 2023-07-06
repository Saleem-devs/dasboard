import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useStateContext } from "../contexts/ContextProvider";
import dayjs from "dayjs";

const CalendarHeader = () => {
  const { currentColor, monthIndex, setMonthIndex } = useStateContext();

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };
  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };
  const handleCurrentDay = () => {
    setMonthIndex(dayjs().month());
  };

  return (
    <header className=" py-2 flex items-center">
      <button
        className=" rounded-md text-white py-1.5 px-4 mr-5"
        style={{ backgroundColor: currentColor }}
        onClick={handleCurrentDay}
      >
        Today
      </button>
      <button
        className="cursor-pointer text-gray-600 mx-2 dark:text-gray-400"
        onClick={handlePrevMonth}
      >
        <FaAngleLeft />
      </button>
      <button
        className="cursor-pointer text-gray-600 dark:text-gray-400 mx-2"
        onClick={handleNextMonth}
      >
        <FaAngleRight />
      </button>
      <h2 className="ml-4 text-xl text-gray-500 dark:text-gray-200 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
};

export default CalendarHeader;
