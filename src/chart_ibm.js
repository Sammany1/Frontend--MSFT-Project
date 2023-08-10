import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const ChartExample_ibm = () => {
  const data = [
    { name: "January", Total: 500 },
   { name: "February", Total: 600 },
   { name: "March", Total: 700 },
   { name: "April", Total: 15 },
   { name: "May", Total: 900 },
   { name: "June", Total: 1700 },
   { name: "June", Total: 1800 },
 
   { name: "June", Total: 100 },
   { name: "June", Total: 1100 },
   { name: "June", Total: 1300 },
   { name: "June", Total: 1400 },
   ];
 
   return (
    <div className="chart">
      {/* Changing number  */}
      <div className="title">(179.41) USD</div>
        {/* <div className="chart_hight"  > */}
        <div style={{ width: '100%', height: "100%" }}>
          <ResponsiveContainer >
            <AreaChart
                 
              data={data}
              margin={{ top: -10, right: 30, left: 0, bottom: 15 }}
            >
              <defs>
                <linearGradient id="total" x1="0" y1="0" x2="0" y2="1" width="fit-content">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="gray" />
              <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="Total"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#total)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
    </div>
 );
};


export default ChartExample_ibm;