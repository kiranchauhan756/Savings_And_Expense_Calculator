import React from "react";
import SideBar from "../SideBar/SideBar.js";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const SetGoal = () => {
  return (
    <div>
      <SideBar />
      <Popup trigger={<button> Trigger</button>} position="right center">
        <div>Popup content here !!</div>
      </Popup>
    </div>
  );
};

export default SetGoal;
