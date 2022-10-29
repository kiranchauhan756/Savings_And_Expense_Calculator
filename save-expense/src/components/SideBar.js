import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/transactions">
          <i className="fa fa-credit-card"></i>
          <span>Transactions</span>
        </Link>
        <Link to="/income">
          <i className="fa fa-calculator"></i>
          <span>Income</span>
        </Link>

        <Link to="/spendings">
          <i className="fa fa-archive"></i>
          <span>Spendings</span>
        </Link>

        <Link to="/savings">
          <i className="fa fa-briefcase" />
          <span>Savings</span>
        </Link>
        <Link to="/setgoals">
          <i className="fas fa-bullseye"></i>
          <span>Set Goals</span>
        </Link>
        <Link to="/charts">
          <i className="fa fa-database"></i>
          <span>Charts</span>
        </Link>
        <Link to="/calendarApp">
          <i className="fa fa-calendar"></i>
          <span>Calendar</span>
        </Link>

        <Link to="/contactUs">
          <i className="far fa-envelope"></i>
          <span>Contact</span>
        </Link>
        <Link to="/login">
          <i className="fa fa-arrow-circle-left"></i>
          <span>Log Out</span>
        </Link>
      </div>
    </div>
  );
};
export default SideBar;
