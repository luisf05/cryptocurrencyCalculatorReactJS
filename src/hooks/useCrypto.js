import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

const useCrypto = (label, initialState, options) => {
  //hook state
  const [state, updateState] = useState(initialState);

  const SelectCrypto = () => (
    <Fragment>
      <Label>{label}</Label>

      <Select onChange={(e) => updateState(e.target.value)} value={state}>
        {options.map((option) => (
          <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>
            {option.CoinInfo.FullName}
          </option>
        ))}
      </Select>
    </Fragment>
  );

  return [state, SelectCrypto, updateState];
};

export default useCrypto;
