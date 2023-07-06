import React, { useState, useEffect } from "react";
import {
  Header,
  CalendarHeader,
  CalendarSidebar,
  Month,
  EventModal,
} from "../components";
import { getMonth } from "../data/utils";
import { useStateContext } from "../contexts/ContextProvider";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useStateContext();

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <Header category="App" title="Calendar" />
      <div>
        {showEventModal && <EventModal />}

        <div className=" flex flex-col">
          <CalendarHeader />
          <div className=" flex-1">
            <Month month={currentMonth} />
            <CalendarSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
