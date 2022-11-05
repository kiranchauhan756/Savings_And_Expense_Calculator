import React, { useRef } from "react";
import SideBar from "../SideBar/SideBar.js";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const SetGoal = () => {
  const monthRef = useRef("");
  return (
    <div>
      <SideBar />
      <div className="new-expense">
        <div className="new-expense__control">
          <label>Select Month:</label>
          <select required={true} ref={monthRef}>
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
          <input type="number" required={true} />
          <div className="new-expense__actions">
            <Popup trigger={<button type="submit"> Add Target</button>}>
              <div style={{ color: "green", fontWeight: "bold" }}>
                Added Successfully💰
              </div>
            </Popup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetGoal;
