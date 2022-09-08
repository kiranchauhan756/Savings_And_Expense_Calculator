import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import ContactUs from "./ContactUs";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
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
        </div>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/contactUs" element={<ContactUs />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
