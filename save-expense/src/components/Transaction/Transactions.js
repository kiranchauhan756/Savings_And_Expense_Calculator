import React, { useState } from "react";
import SideBar from "../SideBar";

import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import moment from "moment";

const Transactions = () => {
  const [fromDateInput, setfromDateInput] = useState(new Date());
  const [toDateInput, setToDateInput] = useState(new Date());
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  const range = {
    Today: [moment(), moment()],
  };

  const handleEvent = (event, picker) => {
    setfromDateInput(picker.startDate._d.toISOString());
    setToDateInput(picker.endDate._d.toISOString());
  };

  async function submitHandler(event) {
    event.preventDefault();

    const expense_details = {
      fromDate: fromDateInput,
      toDate: toDateInput,
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
      <SideBar />

      <div style={{ marginLeft: "680px", marginTop: "50px" }}>
        <h4>
          Select Your Date Range: &nbsp;&nbsp;
          <i className="fa fa-calendar"></i>
        </h4>
        <DateRangePicker
          ranges={range}
          alwaysShowCalendars={false}
          onEvent={handleEvent}
        >
          <button>
            {moment(fromDateInput).format("LL")} to{" "}
            {moment(toDateInput).format("LL")}
          </button>
        </DateRangePicker>
        <button onClick={submitHandler}>submit</button>

        <div>
          {expenses.length > 0 && (
            <ul>
              {expenses.map((expense) => (
                <li key={expense.category}>
                  {expense.category}
                  {expense.groupedSum}
                </li>
              ))}
            </ul>
          )}
          {totalExpense > 0 && <div>Total Expense is ::{totalExpense}</div>}
          {income.length > 0 && (
            <ul>
              {income.map((income) => (
                <li key={income.sourceIncome}>
                  {income.sourceIncome}
                  {income.groupedSum}
                </li>
              ))}
            </ul>
          )}
          {totalIncome > 0 && <div>Total Income is ::{totalIncome}</div>}

          {totalIncome > totalExpense && (
            <div>You have now ::💸{totalIncome - totalExpense}</div>
          )}
          {totalIncome < totalExpense && (
            <div style={{ color: "red" }}>
              You are in loan of😢{totalIncome - totalExpense}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Transactions;
