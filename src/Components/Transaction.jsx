import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const Transaction = ({ text, amount, id }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = amount < 0 ? "-" : "+";
  return (
    <li className={amount < 0 ? "minus" : "plus"} key={id}>
      {text}{" "}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button onClick={() => deleteTransaction(id)} className='delete-btn'>
        x
      </button>
    </li>
  );
};

export default Transaction;
