import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ContactUs from "./components/ContactUs";
import DashBoard from "./components/DashBoard";
import Savings from "./components/Savings";
import Transactions from "./components/Transactions";
import Spendings from "./components/Spendings";
import Accounts from "./components/Accounts";
import SetGoal from "./components/SetGoal";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div
          className="header"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <NavLink exact="true" activeclassname="active" to="/">
            <b>Home</b>
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/login">
            <b>Login</b>
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/contactUs">
            <b>Contact Us</b>
          </NavLink>
        </div>
        <div className="content">
          <Routes>
            <Route exact="true" path="/" element={<Home />}></Route>
            <Route exact="true" path="/login" element={<Login />}></Route>
            <Route
              exact="true"
              path="/contactUs"
              element={<ContactUs />}
            ></Route>
            <Route
              exact="true"
              path="/dashBoard"
              element={<DashBoard />}
            ></Route>
            <Route exact="true" path="/signUp" element={<SignUp />}></Route>
            <Route exact="true" path="/savings" element={<Savings />}></Route>
            <Route
              exact="true"
              path="/spendings"
              element={<Spendings />}
            ></Route>
            <Route exact="true" path="/accounts" element={<Accounts />}></Route>
            <Route exact="true" path="/setgoals" element={<SetGoal />}></Route>
            <Route
              exact="true"
              path="/transactions"
              element={<Transactions />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
