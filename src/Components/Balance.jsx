import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(({ amount }) => amount);

  const balance = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h3>Your Balance</h3>
      <h1 id='balance'>${balance}</h1>
    </>
  );
};

export default Balance;
