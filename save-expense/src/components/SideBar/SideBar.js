import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div>
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <i className="fas fa-times" id="cancel"></i>
        <i className="fas fa-bars" id="btn"></i>
      </label>
      <div className="sidebar">
        <header>
          <i className="fa fa-rupee-sign"> &nbsp;&nbsp; Bachat💰</i>
        </header>
        <NavLink to="/transactions">
          <i className="fa fa-credit-card"></i>
          <span>Transactions</span>
        </NavLink>
        <NavLink to="/income" activestyle={{ color: "red" }}>
          <i className="fa fa-calculator"></i>
          <span>Income</span>
        </NavLink>

        <NavLink to="/spendings" activestyle={{ color: "red" }}>
          <i className="fa fa-archive"></i>
          <span>Spendings</span>
        </NavLink>

        <NavLink to="/savings" activestyle={{ color: "red" }}>
          <i className="fa fa-briefcase" />
          <span>Savings</span>
        </NavLink>
        <NavLink to="/setgoals" activestyle={{ color: "red" }}>
          <i className="fas fa-bullseye"></i>
          <span>Set Goals</span>
        </NavLink>
        <NavLink to="/charts" activestyle={{ color: "red" }}>
          <i className="fa fa-database"></i>
          <span>Charts</span>
        </NavLink>
        <NavLink to="/calendarApp" activestyle={{ color: "red" }}>
          <i className="fa fa-calendar"></i>
          <span>Calendar</span>
        </NavLink>

        <NavLink to="/contactUs" activestyle={{ color: "red" }}>
          <i className="far fa-envelope"></i>
          <span>Contact</span>
        </NavLink>
        <NavLink to="/" activestyle={{ color: "red" }}>
          <i className="fa fa-arrow-circle-left"></i>
          <span>Log Out</span>
        </NavLink>
      </div>
    </div>
  );
};
export default SideBar;
