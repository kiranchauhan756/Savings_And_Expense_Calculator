import "./NewExpense/NewExpense.css";
import SideBar from "./SideBar";
import { useRef } from "react";
const Income = () => {
  const incomeRef = useRef("");
  const sourceRef = useRef("");
  const dateRef = useRef("");
  async function submitHandler(event) {
    event.preventDefault();
    const incomeData = {
      income: incomeRef.current.value,
      source_income: sourceRef.current.value,
      income_date: dateRef.current.value,
    };
    const response = await fetch("http://localhost:8080/income/", {
      method: "POST",
      body: JSON.stringify(incomeData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      console.log("ok");
      return response.json();
    }
  }
  return (
    <form onSubmit={submitHandler}>
      <div>
        <SideBar />
      </div>
      <div>
        <label>Source Of Income</label>
        <input type="text" required={true} ref={sourceRef} />

        <label>Income</label>
        <input type="number" required={true} ref={incomeRef} />
        <label>Date</label>
        <input type="date" required={true} ref={dateRef} />
        <div>
          <button type="submit" className="btn btn-primary">
            Add Income
          </button>
        </div>
      </div>
    </form>
  );
};

export default Income;
