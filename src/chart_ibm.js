import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const ChartExample_ibm = (props) => {
  const data = props.data
  const findPreviousObjectBeforeZeroTotal = (graphArray) => {
    for (let i = 1; i < graphArray.length; i++) {
        if (graphArray[i].Total === 0) {
            return graphArray[i - 1];
        }
    }
    return null;  
};

const previousObject = findPreviousObjectBeforeZeroTotal(data);

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