import React, { Component } from "react";

class Expense extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
  }

  render() {
    return <div>This is Expense Page.</div>;
  }
}

export default Expense;
