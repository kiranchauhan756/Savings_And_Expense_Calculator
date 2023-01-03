import React, { useState } from "react";
import SideBar from "../SideBar/SideBar.js";
import Expenses from "./Expenses/Expenses.js";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import NewExpense from "./NewExpense/NewExpense.js";

const DUMMY_EXPENSES = [];
const Spendings = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="vh-100" style={{ background: "#DCF2C4" }}>
      <SideBar />

      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default Spendings;
