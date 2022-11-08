import React from "react";
import SideBar from "../SideBar/SideBar";
import Transactions from "../Transaction/Transactions";

const DashBoard = () => {
  return (
    <div>
      <div id="DashBoard">
        <SideBar />
        <Transactions />
      </div>
    </div>
  );
};

export default DashBoard;
