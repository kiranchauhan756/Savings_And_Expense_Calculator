import React from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Savings from "./Savings";
import Spendings from "./Spendings";
import Transactions from "./Transactions";

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
      </Tabs>
      {value === 0 && <Savings />}
      {value === 1 && <Spendings />}
      {value === 2 && <Transactions />}
    </>
  );
};

export default DashBoard;
