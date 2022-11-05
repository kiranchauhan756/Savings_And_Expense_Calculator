import "./Income.css";
import SideBar from "../SideBar/SideBar";
import { useRef } from "react";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
const Income = () => {
  const incomeRef = useRef("");
  const sourceRef = useRef("");
  const dateRef = useRef("");

  async function submitHandler(event) {
    event.preventDefault();
    const incomeData = {
      income: incomeRef.current.value,
      sourceIncome: sourceRef.current.value,
      incomeDate: dateRef.current.value,
    };
    const response = await fetch("http://localhost:8080/income/", {
      method: "POST",
      body: JSON.stringify(incomeData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      console.log("ok");

      return response.json();
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <SideBar />
      </div>
      <div className="new-expense">
        <div className="new-expense__control">
          <label>Source Of Income</label>
          <select required={true} ref={sourceRef}>
            <option value="BUSINESS">Business Income</option>
            <option value="SALARY">Salary Income</option>
            <option value="INTEREST">Interest Income</option>
            <option value="RENTAL">Rental Income</option>
            <option value="STOCK">Dividend/Capital Gains Income</option>
            <option value="OTHERS">Others</option>
          </select>
        </div>
        <div className="new-expense__control">
          <label>Income</label>
          <input type="number" required={true} ref={incomeRef} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" required={true} ref={dateRef} />
        </div>
        <div className="new-expense__actions">
          <Popup trigger={<button type="submit"> Add Income</button>}>
            <div style={{ color: "green", fontWeight: "bold" }}>
              Added Successfully💰
            </div>
          </Popup>
        </div>
      </div>
    </form>
  );
};

export default Income;
