import React, { useState } from "react";
import SideBar from "./SideBar";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import moment from "moment";

const Transactions = () => {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const range = {
    Today: [moment(), moment()],
  };

  const handleEvent = (event, picker) => {
    console.log("start: ", picker.startDate._d);
    console.log("end: ", picker.endDate._d);
    setFromDate(picker.startDate._d.toISOString());
    setToDate(picker.endDate._d.toISOString());
  };

  return (
    <div>
      <SideBar />
      <div style={{ marginLeft: "680px", marginTop: "50px" }}>
        <h4>
          Select Your Date Range: &nbsp;&nbsp;
          <i className="fa fa-calendar"></i>
        </h4>
        <DateRangePicker
          ranges={range}
          alwaysShowCalendars={false}
          onEvent={handleEvent}
        >
          <button>
            {moment(fromDate).format("LL")} to {moment(toDate).format("LL")}
          </button>
        </DateRangePicker>
      </div>
    </div>
  );
};
export default Transactions;
