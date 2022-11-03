import React from "react";
import SideBar from "../SideBar/SideBar";

const DashBoard = () => {
  return (
    <div>
      <div id="DashBoard">
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"spendings"} />
      </div>
    </div>
  );
};

export default DashBoard;
