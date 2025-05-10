import React from "react";
import Gauge from "@/components/Gauge";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";

import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import { useEffect, useState } from "react";
import {statisticsCardsData, statisticsChartsData,} from "@/data";
import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';


export function Home() {
  const [fearGreedData, setFearGreedData] = useState([]);

  useEffect(() => {
    fetch('https://api.alternative.me/fng/?limit=30')
    .then((res) => res.json())
    .then((data) => {
      const formatted = data.data
        .reverse() // reverse to show oldest to newest
        .map((item) => ({
          day: new Date(item.timestamp * 1000).toLocaleDateString("en-US", {
            weekday: "short",
          }),
          index: parseInt(item.value),
        }));
      setFearGreedData(formatted);
    })
    .catch((err) => console.error("Failed to fetch Fear & Greed Index:", err));
  }, []);
  return (
    <div className="mt-12">
      
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {fearGreedData.length > 0 && (
        <div className="mt-2 flex justify-center">
          <Gauge value={fearGreedData[fearGreedData.length - 1].index} />
        </div>
      )}
        {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
          
          <StatisticsCard
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
            footer={
              <Typography className="font-normal text-blue-gray-600">
                <strong className={footer.color}>{footer.value}</strong>
                &nbsp;{footer.label}
              </Typography>
            }
          />
        ))}
      </div>
      <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {statisticsChartsData.map((props) => (
          <StatisticsChart
            key={props.title}
            {...props}
            footer={
              <Typography
                variant="small"
                className="flex items-center font-normal text-blue-gray-600"
              >
                <ClockIcon strokeWidth={2} className="h-4 w-4 text-blue-gray-400" />
                &nbsp;{props.footer}
              </Typography>
            }
          />
        ))}
      </div>
      <div>
      <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 flex items-center justify-between p-6"
      >
      <div>
        <Typography variant="h6" color="blue-gray" className="mb-1">
           Fear and Greed Index
      </Typography>
      <Typography
        variant="small"
        className="flex items-center gap-1 font-normal text-blue-gray-600"
      >
        <CheckCircleIcon strokeWidth={3} className="h-4 w-4 text-blue-gray-200" />
        &nbsp;Last 7 days
      </Typography>
      </div>
      </CardHeader>
      <CardBody className="px-6 pb-6">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={fearGreedData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="index" stroke="#4f46e5" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardBody>
      </Card>
      </div>
    </div>
  );
}

export default Home;
