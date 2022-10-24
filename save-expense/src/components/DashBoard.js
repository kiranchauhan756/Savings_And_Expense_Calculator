import React from "react";

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
        <Tab label="Transactions" />
        <Tab label="Spendings" />
        <Tab label="Saving" />
        <Tab label="Accounts" />
        <Tab label="SetGoal" />
      </Tabs>
      {value === 0 && <Transactions />}
      {value === 1 && <Spendings />}
      {value === 2 && <Savings />}
      {value === 3 && <Accounts />}
      {value === 4 && <SetGoal />}
    </>
  );
};

export default DashBoard;
