import React from "react";
import { useNavigate } from "react-router-dom";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";

const DashBoard = () => {
  const navigate = useNavigate();
  const handleSavings = () => {
    navigate("/savings");
  };
  const handleTransactions = () => {
    navigate("/transactions");
  };
  const handleSpendings = () => {
    navigate("/spendings");
  };
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/savings" onClick={handleSavings} activeStyle>
            Savings
          </NavLink>
          <NavLink to="/spendings" onClick={handleSpendings} activeStyle>
            Spendings
          </NavLink>
          <NavLink to="/transactions" onClick={handleTransactions} activeStyle>
            Transactions
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default DashBoard;
