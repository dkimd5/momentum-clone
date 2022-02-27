import React, { useState, useEffect } from "react";
import axios from "axios";
import { QuoteContainer, Text, TextAuthor } from "./QuoteStyles";

const url = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";

function Quote() {
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

  return (
    <QuoteContainer>
      <Text>
        <i>"{data?.quotes[0].text}"</i>
      </Text>
      <TextAuthor>{data?.quotes[0].author}</TextAuthor>
    </QuoteContainer>
  );
}

export default Quote;
