import React from "react";

function DateToday() {
  let today = new Date();
  let date =
    today.getFullYear() + "/" + today.getMonth() + "/" + today.getDate();

  return (
    <div>
      <p>{date}</p>
    </div>
  );
}

export default DateToday;
