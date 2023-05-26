import React, { createContext, useContext, useState } from "react";
import dayjs from "dayjs";

const CalendarContext = createContext();

// {
//   monthIndex: 0,
//   setMonthIndex: (index) => {},
// }

export const CalendarContextProvider = ({ children }) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  return (
    <CalendarContext.Provider value={{ monthIndex, setMonthIndex }}>
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendarContext = () => useContext(CalendarContext);
