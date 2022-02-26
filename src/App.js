import React from "react";
import Time from "./components/Time";
import Weather from "./components/Weather";
import DateToday from "./components/DateToday";

function App() {
  return (
    <div>
      <Weather />
      <Time />
      <DateToday />
    </div>
  );
}

export default App;
