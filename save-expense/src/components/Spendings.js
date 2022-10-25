import React, { useState } from "react";
import SideBar from "./SideBar.js";
import Expenses from "./Expenses/Expenses.js";

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
    <div>
      <div>
        <SideBar />
      </div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default Spendings;
