import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Error from "./Error";

import useCoin from "../hooks/useCoin";
import useCrypto from "../hooks/useCrypto";
import axios from "axios";

const Button = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Form = ({ saveCoin, saveCryptoCurrency }) => {
  const [cryptoCurrencyList, saveCryptoCurrencies] = useState([]);
  const [error, saveError] = useState(false);

  const COINS = [
    { code: "USD", name: "Dolar de Estados Unidos" },
    { code: "MXN", name: "Peso Mexicano" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "Libra Esterlina" },
  ];

  const [coin, SelectCoin] = useCoin("Choose your coin", "", COINS);

  const [cryptoCurrency, SelectCryptoCurrency] = useCrypto(
    "Choose your Ccyptocurrency",
    "",
    cryptoCurrencyList
  );

  useEffect(() => {
    const api = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const result = await axios.get(url);

      saveCryptoCurrencies(result.data.Data);
    };
    api();
  }, []);

  const calculateValue = (e) => {
    e.preventDefault();

    if (coin === "" || cryptoCurrency === "") {
      saveError(true);
      return;
    }
    saveError(false);
    saveCoin(coin);
    saveCryptoCurrency(cryptoCurrency);
  };

  return (
    <form onSubmit={calculateValue}>
      {error ? (
        <Error message="Ups! All the fields are required"></Error>
      ) : null}

      <SelectCoin />
      <SelectCryptoCurrency />
      <Button type="submit" value="Convert" />
    </form>
  );
};

export default Form;
