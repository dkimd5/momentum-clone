import React, { useState, useEffect } from "react";
import axios from "axios";
import { QuoteContainer, Text, TextAuthor } from "./QuoteStyles";

const url = "https://api.quotable.io/random";

function Quote() {
  const [data, setData] = useState(null);
  console.log(data);

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

  return (
    <QuoteContainer>
      <Text>
        <i>"{data?.content}"</i>
      </Text>
      <TextAuthor>{data?.author}</TextAuthor>
    </QuoteContainer>
  );
}

export default Quote;
