import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import SideBar from "../SideBar/SideBar";
import { useState } from "react";

const CalendarApp = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <SideBar />
      <div
        style={{
          marginLeft: "650px",
          padding: "50px",
        }}
      >
        <h1
          style={{
            color: "black",
            fontSize: "18px",
            fontStyle: "italic",
            fontWeight: "bold",
            marginLeft: "30px",
            padding: "20px",
          }}
        >
          You can select your range here
        </h1>
        <div>
          <Calendar onChange={setDate} value={date} selectRange={true} />
        </div>
        {date.length > 0 ? (
          <p
            style={{
              color: "black",
              fontSize: "18px",
              fontStyle: "italic",
              fontWeight: "bold",
              padding: "10px",
            }}
          >
            <span>Start:</span> {date[0].toDateString()}
            &nbsp; to &nbsp;
            <span>End:</span> {date[1].toDateString()}
          </p>
        ) : (
          <p>
            <span>Default selected date:</span> {date.toDateString()}
          </p>
        )}
      </div>
    </div>
  );
};
export default CalendarApp;
