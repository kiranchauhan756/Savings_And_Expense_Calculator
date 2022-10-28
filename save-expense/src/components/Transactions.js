import "./NewExpense/ExpensesFilter.css";
import SideBar from "./SideBar";
import React from "react";

const Transactions = () => {
  const dropDownChangeHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <SideBar />

      <div className="expenses-filter">
        <div className="expenses-filter__control">
          <label>Filter by year</label>
          <select onChange={dropDownChangeHandler}>
            <option value="1">january</option>
            <option value="2">february</option>
            <option value="3">march</option>
            <option value="4">apr</option>
            <option value="5">may</option>
            <option value="6">june</option>
            <option value="7">july</option>
            <option value="8">august</option>
            <option value="9">september</option>
            <option value="10">october</option>
            <option value="11">novembor</option>
            <option value="12">december</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
