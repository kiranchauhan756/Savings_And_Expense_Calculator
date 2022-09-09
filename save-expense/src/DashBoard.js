import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Transactions from "./Transactions";
import Savings from "./Savings";
import Spendings from "./Spendings";
import Accounts from "./Accounts";

const DashBoard = () => {
  return (
    <div classname="dashBoard">
      <BrowserRouter>
        <div className="header">
          <NavLink exact activeClassName="active" to="/savings">
            <b>Savings</b>
          </NavLink>
          <NavLink exact activeClassName="active" to="/transactions">
            <b>Transactions</b>
          </NavLink>
          <NavLink exact activeClassName="active" to="/spendings">
            <b>Spendings</b>
          </NavLink>
          <NavLink exact activeClassName="active" to="/accounts">
            <b>Accounts</b>
          </NavLink>
        </div>
        <div className="content">
          <Routes>
            <Route exact path="/savings" element={<Savings />}></Route>
            <Route exact path="/accounts" element={<Accounts />}></Route>
            <Route exact path="/spendings" element={<Spendings />}></Route>
            <Route
              exact
              path="/transactions"
              element={<Transactions />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default DashBoard;
