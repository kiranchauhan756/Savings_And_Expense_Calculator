import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [titleChange, setTitleChange] = useState("");
  const [amountChange, setAmountChange] = useState("");
  const [dateChange, setDateChange] = useState("");

  const titleChangeHandler = (event) => {
    setTitleChange(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmountChange(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDateChange(event.target.value);
  };
  //--------------for dbms--------------//

  //-------------------------------///
  async function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: titleChange,
      amount: amountChange,
      expenseDate: new Date(dateChange),
    };
    const response = await fetch("http://localhost:8080/expense/", {
      method: "POST",
      body: JSON.stringify(expenseData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      props.onSaveExpenseData(expenseData);
    }

    setTitleChange("");
    setAmountChange("");
    setDateChange("");
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={titleChange}
            required={true}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amountChange}
            required={true}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={dateChange}
            required={true}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
