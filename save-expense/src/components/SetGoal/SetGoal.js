import React, { useRef } from "react";
import SideBar from "../SideBar/SideBar.js";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const SetGoal = () => {
  const setGoalCategoryRef = useRef("");
  const targetRef = useRef("");
  async function submitHandler(event) {
    event.preventDefault();
    const setGoalData = {
      setGoalCategory: setGoalCategoryRef.current.value,
      target: targetRef.current.value,
    };
    const response = await fetch("http://localhost:8080/setGoals/", {
      method: "POST",
      body: JSON.stringify(setGoalData),
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
    <div>
      <SideBar />
      <div className="new-expense">
        <form onSubmit={submitHandler}>
          <div className="new-expense__control">
            <label>Select Month:</label>
            <select required={true} ref={setGoalCategoryRef}>
              <option value="JANUARY">January</option>
              <option value="FEBRUARY">February</option>
              <option value="MARCH">March</option>
              <option value="APRIL">April</option>
              <option value="MAY">May</option>
              <option value="JUNE">June</option>
              <option value="JULY">July</option>
              <option value="AUGUST">August</option>
              <option value="SEPTEMBER">September</option>
              <option value="OCTOBER">October</option>
              <option value="NOVEMBOR">Novembor</option>
              <option value="DECEMBER">December</option>
            </select>
            <label>Enter Spending Target:</label>
            <input type="number" required={true} ref={targetRef} />
            <div className="new-expense__actions">
              <Popup trigger={<button type="submit"> Add Target</button>}>
                <div style={{ color: "green", fontWeight: "bold" }}>
                  Added Successfully💰
                </div>
              </Popup>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SetGoal;
