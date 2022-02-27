import React from "react";
import Time from "./components/Time";
import Weather from "./components/Weather";
import DateToday from "./components/DateToday";
import Quote from "./components/Quote";
import { AppContainer } from "./AppStyles";

function App() {
  return (
    <AppContainer>
      <Weather />
      <Time />
      <DateToday />
      <Quote />
    </AppContainer>
  );
}

export default App;
