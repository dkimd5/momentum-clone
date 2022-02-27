import React from "react";
import { DateContainer } from "./DateTodayStyles";

function DateToday() {
  let today = new Date();
  let date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

  return (
    <DateContainer>
      <p>{date}</p>
    </DateContainer>
  );
}

export default DateToday;
