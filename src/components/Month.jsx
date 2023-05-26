import React from "react";
import Day from "./Day";

const Month = ({ month }) => {
  return (
    <div className="md:h-screen flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((day, i) => (
            <Day key={i} day={day} rowIdx={index} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Month;
