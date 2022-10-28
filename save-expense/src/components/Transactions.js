import React, { useRef, useState } from "react";

import SideBar from "./SideBar";
import "./Transactions.css";

const Transactions = () => {
  const fromExpenseDateRef = useRef("");
  const toExpenseDateRef = useRef("");
  const [expenses, setExpenses] = useState([]);

  async function submitHandler(event) {
    event.preventDefault();
    const expense_details = {
      fromDate: fromExpenseDateRef.current.value,
      toDate: toExpenseDateRef.current.value,
    };
    const request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expense_details),
    };
    fetch("http://localhost:8080/expense/list", request)
      .then((response) => response.json())
      .then((detail) => setExpenses(detail));
  }

  return (
    <div>
      <div>
        <SideBar />
      </div>
      <div className="transactions">
        <p className="p">This is page of Transactions</p>
        <label>Enter From Date:</label>
        <input type="date" required={true} ref={fromExpenseDateRef} />
        <label>Enter To Date:</label>
        <input type="date" required={true} ref={toExpenseDateRef} />
        <button
          type="button"
          className="btn btn-primary"
          onClick={submitHandler}
        >
          Submit
        </button>
        {expenses.length > 0 && (
          <ul>
            {expenses.map((expense) => (
              <li key={expense.id}>
                {expense.title}
                {expense.amount}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Transactions;
