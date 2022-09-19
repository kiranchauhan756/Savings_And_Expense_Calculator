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
  // const [details, setDetails] = useState([]);
  // function fetchDetails() {
  //   fetch("https://swapi.dev/api/planets")
  //     .then((response) => {
  //       return response.json;
  //     })
  //     .then((data) => {
  //       const clickMe = data.results;
  //       setDetails(data.results);
  //     });
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <div className="header">
          <NavLink exact activeClassName="active" to="/">
            <b>Home</b>
          </NavLink>
          <NavLink exact activeClassName="active" to="/login">
            <b>Login</b>
          </NavLink>
          <NavLink exact activeClassName="active" to="/contactUs">
            <b>Contact Us</b>
          </NavLink>
          <NavLink exact activeClassName="active" to="/dashBoard">
            <b>DashBoard</b>
          </NavLink>
        </div>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/contactUs" element={<ContactUs />}></Route>
            <Route exact path="/dashBoard" element={<DashBoard />}></Route>
            <Route exact path="/signUp" element={<SignUp />}></Route>
            <Route exact path="/savings" element={<Savings />}></Route>
            <Route exact path="/spendings" element={<Spendings />}></Route>
            <Route exact path="/accounts" element={<Accounts />}></Route>
            <Route exact path="/setgoals" element={<SetGoal />}></Route>
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
}

export default App;
