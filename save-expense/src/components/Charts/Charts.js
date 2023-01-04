import React from "react";
import SideBar from "../SideBar/SideBar";
import {
  // PieChart,
  // Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const Charts = () => {
  const data = [
    { name: "Facebook", users: 20000 },
    { name: "Instagram", users: 15000000 },
    { name: "Twiter", users: 1000000000 },
    { name: "Telegram", users: 160000000 },
  ];

  return (
    <div>
      <SideBar />

      <div style={{ marginLeft: "650px" }}>
        {/* <PieChart width={500} height={500}>
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart> */}
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 0,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="2 2 " />
          <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
};

export default Charts;
