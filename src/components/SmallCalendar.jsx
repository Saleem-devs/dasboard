import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { getMonth } from "../data/utils";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function SmallCalendar() {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  const {
    currentColor,
    monthIndex,
    setSmallCalendarMonth,
    setDaySelected,
    daySelected,
  } = useStateContext();

  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);

  function handlePrevMonth() {
    setCurrentMonthIdx(currentMonthIdx - 1);
  }
  function handleNextMonth() {
    setCurrentMonthIdx(currentMonthIdx + 1);
  }

  function getDayClass(day) {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const slcDay = daySelected && daySelected.format(format);
    if (nowDay === currDay) {
      return "p-2 rounded-full text-white";
    } else if (currDay === slcDay) {
      return "bg-blue-100 p-2 rounded-full text-blue-600 font-bold";
    } else {
      return "";
    }
  }
  return (
    <div className="mt-9 w-full max-w-md">
      <header className="flex items-center gap-5">
        <p className="text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}
        </p>
        <div>
          <button
            className=" cursor-pointer text-gray-600 mx-2"
            onClick={handlePrevMonth}
          >
            <FaAngleLeft />
          </button>
          <button
            className=" cursor-pointer text-gray-600 mx-2"
            onClick={handleNextMonth}
          >
            <FaAngleRight />
          </button>
        </div>
      </header>
      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, i) => (
          <span key={i} className="text-sm py-1 ">
            {day.format("dd").charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSmallCalendarMonth(currentMonthIdx);
                  setDaySelected(day);
                }}
                className={`py-1 text-left w-full `}
              >
                <span
                  className={`text-sm  ${getDayClass(day)}`}
                  style={{
                    backgroundColor:
                      getDayClass(day) === "p-2 rounded-full text-white"
                        ? currentColor
                        : "",
                  }}
                >
                  {day.format("D")}
                </span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
