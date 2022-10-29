import "./Transactions.css";
import SideBar from "./SideBar";
import React, { useState } from "react";

const Transactions = () => {
  const [calculateExpense, setCalculateExpense] = useState(0);

  const dropDownChangeHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <SideBar />

      <div className="new-expense">
        <div className="new-expense__control"></div>
      </div>
    </div>
  );
};

export default Transactions;
