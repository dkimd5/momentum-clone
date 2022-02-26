import React from "react";
import Time from "./components/Time";
import Weather from "./components/Weather";
import Date from "./components/Date";

function App() {
  return (
    <div>
      <Weather />
      <Time />
      <Date />
    </div>
  );
}

export default App;
