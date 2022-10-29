import React, { useState } from "react";
import SideBar from "./SideBar.js";

const SetGoal = () => {
  const [value, setValue] = useState(1);
  return (
    <div>
      <SideBar />
      <div>
        <p>{value}</p>
        <button onClick={() => setValue(value + 1)}>Increment Value</button>
      </div>
    </div>
  );
};

export default SetGoal;
