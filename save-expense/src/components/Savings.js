import React, { useRef, useState } from "react";
import SideBar from "./SideBar";

import "./Savings.css";
const Savings = () => {
  const fromExpenseDateRef = useRef("");
  const toExpenseDateRef = useRef("");
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);

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

    fetch("http://localhost:8080/income/listIncome", request)
      .then((response) => response.json())
      .then((incomeDetail) => setIncome(incomeDetail));
  }

  return (
    <div>
      <div>
        <SideBar />
      </div>
      <div className="new-expense">
        <div className="new-expense__control">
          <label>Enter From Date:</label>
          <input type="date" required={true} ref={fromExpenseDateRef} />
        </div>
        <div className="new-expense__control">
          <label>Enter To Date:</label>
          <input type="date" required={true} ref={toExpenseDateRef} />
        </div>
        <div className="new-expense__actions">
          <button type="submit" onClick={submitHandler}>
            Submit
          </button>
        </div>
        <div className="fetch-details">
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
          {income.length > 0 && (
            <ul>
              {income.map((income) => (
                <li key={income.id}>
                  {income.income}
                  {income.sourceIncome}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Savings;
