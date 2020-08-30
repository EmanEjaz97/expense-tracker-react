import React, { useContext } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../Context/GlobalState";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul id='list' className='list'>
        {transactions.map((transaction) => {
          return (
            <Transaction
              key={transaction.id}
              amount={transaction.amount}
              text={transaction.text}
              id={transaction.id}
            />
          );
        })}
      </ul>
    </>
  );
};

export default TransactionList;
