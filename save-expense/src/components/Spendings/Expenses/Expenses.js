import React from "react";
import ExpenseItem from "./ExpenseItem";

import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <div>
      <Card className="expenses">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            category={expense.category}
            amount={expense.amount}
            date={expense.expenseDate}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
