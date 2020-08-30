import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const { addTransaction } = useContext(GlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction(text, amount);
    setText("");
    setAmount("");
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type='text'
            id='text'
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            value={amount}
            type='number'
            id='amount'
            placeholder='Enter amount...'
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
