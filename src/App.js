import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";

import img from "./cryptomonedas.png";
import Form from "./components/Form";
import Resume from "./components/Resume";
import Spinner from "./components/Spinner";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: "Bebas Neue", Arial, Helvetica, sans-serif;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #88a2fe;
  }
`;
function App() {
  const [coin, saveCoin] = useState("");
  const [cryptoCurrency, saveCryptoCurrency] = useState("");
  const [result, saveResult] = useState({});
  const [loading, saveLoading] = useState(false);

  useEffect(() => {
    const calculateCryptoCurrency = async () => {
      if (coin === "") return;
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${coin}`;
      const result = await axios.get(url);
      saveLoading(true);

      setTimeout(() => {
        saveLoading(false);
        saveResult(result.data.DISPLAY[cryptoCurrency][coin]);
      }, 3000);
    };
    calculateCryptoCurrency();
  }, [coin, cryptoCurrency]);

  const component = loading ? <Spinner /> : <Resume result={result} />;

  return (
    <Container>
      <div>
        <Image src={img} alt="image default" />
      </div>

      <div>
        <Heading>Cryptocurrency converter calculator </Heading>
        <Form saveCoin={saveCoin} saveCryptoCurrency={saveCryptoCurrency} />

        {component}
      </div>
    </Container>
  );
}

export default App;
