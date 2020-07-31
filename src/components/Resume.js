import React from "react";
import styled from "@emotion/styled";

const ResumeContainer = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #66a2fe;
  text-align: left;
`;

const Information = styled.p`
  font-size: 18px;
  span {
    font-weight: bold;
  }
`;
const Price = styled.p`
  font-size: 30px;
  span {
    font-weight: bold;
  }
`;
const resume = ({ result }) => {
  if (Object.keys(result).length === 0) return null;

  return (
    <ResumeContainer>
      <Price>
        The price is: <Information>{result.PRICE}</Information>
      </Price>
      <Price>
        The highest price:{" "}
        <Information>{result.HIGHDAY}</Information>
      </Price>
      <Price>
        The lowest price:{" "}
        <Information>{result.LOWDAY}</Information>
      </Price>
      <Price>
        The variation in the last 24h:{" "}
        <Information>{result.CHANGEPCT24HOUR}</Information>
      </Price>
      <Price>
        Last update: <span>{result.LASTUPDATE}</span>
      </Price>
    </ResumeContainer>
  );
};

export default resume;
