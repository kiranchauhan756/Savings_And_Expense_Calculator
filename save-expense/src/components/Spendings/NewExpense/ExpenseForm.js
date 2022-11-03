import React, { useRef } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const incomeRef = useRef("");
  const categoryRef = useRef("");
  const expenseDateRef = useRef("");

  async function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      category: categoryRef.current.value,
      amount: incomeRef.current.value,
      expenseDate: expenseDateRef.current.value,
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
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Category</label>
          <select ref={categoryRef} required={true}>
            <option value="CLOTHES">Clothes</option>
            <option value="FOOD">Food</option>
            <option value="FUEL">Fuel</option>
            <option value="SHOPPING">Shopping</option>
            <option value="TRAVEL">Travel</option>
            <option value="OTHERS">Others</option>
          </select>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" ref={incomeRef} required={true} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            ref={expenseDateRef}
            required={true}
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
