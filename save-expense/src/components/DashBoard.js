import React from "react";
import SideBar from "./SideBar";

const DashBoard = () => {
  return (
    <div>
      <div id="DashBoard">
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"DashBoard"} />
      </div>
    </div>
  );
};

export default DashBoard;
