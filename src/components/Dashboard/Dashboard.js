import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";

const Dashboard = () => {
  const [profit, setProfit] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProfit(data);
      });
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4 p-7 md:m-14 md:gap-y-12 m-4">
      <div className="line-chart">
        <h3 className="text-gray-600 text-xl text-center font-semibold mb-5 mx-auto  w-[200px]">
          Monthwise Sell
        </h3>
        <LineChart
          style={{ maxwidth: "90vw" }}
          width={450}
          height={250}
          data={profit}
          margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis dataKey="sell" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sell" stroke="#8884d8" />
        </LineChart>
      </div>
      <div className="area-chart">
        <h3 className="text-gray-600 text-xl text-center font-semibold mb-5 mx-auto ">
          Investment VS Revenue
        </h3>
        <AreaChart
          width={450}
          height={250}
          data={profit}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis dataKey="investment" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="investment"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </div>
      <div className="bar-chart">
        <h3 className="text-gray-600 text-xl text-center font-semibold mb-5 mx-auto ">
          Investment VS Revenue
        </h3>
        <BarChart width={450} height={250} data={profit}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis dataKey="investment" />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" fill="#8884d8" />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
      </div>
      <div className="scattered-chart">
        <h3 className="text-gray-600 text-xl text-center font-semibold mb-5 mx-auto ">
          Investment VS Revenue
        </h3>
        <ScatterChart
          width={450}
          height={250}
          margin={{ top: 20, right: 20, bottom: 10, left: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" name="stature" />
          <YAxis dataKey="sell" />
          <ZAxis dataKey="revenue" range={[64, 144]} />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Legend />
          <Scatter name="sell" data={profit} fill="#8884d8" />
          <Scatter name="revenue" data={profit} fill="#82ca9d" />
        </ScatterChart>
      </div>
    </div>
  );
};

export default Dashboard;
