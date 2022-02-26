import React, { useState, useEffect } from "react";
import axios from "axios";

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=moscow&units=metric&appid=126d418eddb672618ccf7add92fbf7ac";

function Weather() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);

  if (!data) return null;

  return (
    <div>
      <p>{data.main.temp.toFixed(0)}</p>
    </div>
  );
}

export default Weather;
