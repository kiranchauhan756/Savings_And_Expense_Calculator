import React from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Savings from "./Savings";
import Spendings from "./Spendings";
import Transactions from "./Transactions";
import Accounts from "./Accounts";
import SetGoal from "./SetGoal";

const DashBoard = () => {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <Tabs
        value={value}
        textColor="primary"
        indicatorColor="primary"
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Tab label="Saving" />
        <Tab label="Spendings" />
        <Tab label="Transactions" />
        <Tab label="Accounts" />
        <Tab label="SetGoal" />
      </Tabs>
      {value === 0 && <Savings />}
      {value === 1 && <Spendings />}
      {value === 2 && <Transactions />}
      {value === 3 && <Accounts />}
      {value === 4 && <SetGoal />}
    </>
  );
};

export default DashBoard;
