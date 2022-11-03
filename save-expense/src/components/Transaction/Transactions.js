import React, { useState, useRef } from "react";
import SideBar from "../SideBar";
import "./Transactions.css";

const Transactions = () => {
  const fromExpenseDateRef = useRef("");
  const toExpenseDateRef = useRef("");
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

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
    fetch("http://localhost:8080/expense/groupByCategory", request)
      .then((response) => response.json())
      .then((detail) => {
        setExpenses(detail);
        setTotalExpense(0);
        if (detail.length > 0) {
          let expense = detail[detail.length - 1];
          setTotalExpense(expense.totalSum);
        }
      });

    fetch("http://localhost:8080/income/groupBySourceIncome", request)
      .then((response) => response.json())
      .then((incomeDetail) => {
        setIncome(incomeDetail);
        setTotalIncome(0);
        if (incomeDetail.length > 0) {
          let income = incomeDetail[incomeDetail.length - 1];
          setTotalIncome(income.totalSum);
        }
      });
  }

  return (
    <div>
      <div>
        <SideBar />
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

          <div className="show">
            <div className="sourceIncome">
              {income.map((income, index) => (
                <p key={index}>
                  {income.sourceIncome}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {income.groupedSum}
                </p>
              ))}
            </div>
            <div className="separate">
              {
                "-------------------------------------------------------------------------------------------------------------------"
              }
            </div>
            <div className="sourceExpense">
              {expenses.map((expense, index) => (
                <p key={index}>
                  {expense.category}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {expense.groupedSum}
                </p>
              ))}
            </div>

            {totalIncome > 0 && <div>Total Income is ::{totalIncome}</div>}
            {totalExpense > 0 && <div>Total Expense is ::{totalExpense}</div>}
            <div className="separate">
              {
                "-------------------------------------------------------------------------------------------------------------------"
              }
            </div>

            {totalIncome > totalExpense && (
              <div>You have now ::💸{totalIncome - totalExpense}</div>
            )}
            {totalIncome < totalExpense && (
              <div style={{ color: "red" }}>
                😢😢😢{totalIncome - totalExpense}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Transactions;
