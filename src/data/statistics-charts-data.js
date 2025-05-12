import { chartsConfig } from "@/configs";

const dailySalesChart = {
  type: "line",
  height: 220,
  series: [
    {
      name: "PUELL",
      data: [50.5, 54.5, 54.5, 63.5, 56, 53.5, 55.5, 58, 51.5, 53, 47, 49.5, 64.5, 47.5, 59, 61, 56, 56.5, 59.5, 61, 55, 57.5, 68, 69.5, 58, 73, 64.5, 72, 63, 68.5],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#0288d1"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [4/10, 4/11, 4/12, 4/13, 4/14, 4/15, 4/16, 4/17, 4/18, 4/19, 4/20, 4/21, 4/22, 4/23, 4/24, 4/25, 4/26, 4/27, 4/28, 4/29],
    },
  },
};

const completedTaskChart = {
  type: "line",
  height: 220,
  series: [
    {
      name: "Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#388e3c"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  },
};

const completedTasksChart = {
  ...completedTaskChart,
  series: [
    {
      name: "Tasks",
      data: [52.83, 52.78, 53.79, 53.93, 53.45, 52.66, 52.78, 53.74, 56.35],
    },
  ],
};


export const statisticsChartsData = [
  {
    color: "white",
    title: "The Puell Multiple",
    description: "Chart showing the The Puell Multiple",
    footer: "Latest 68.5",
    chart: dailySalesChart,
  },
  {
    color: "white",
    title: "Bitcoin: NUPL",
    description: "Net Unrealized Profit/Loss",
    footer: "updated 4 min ago",
    chart: completedTasksChart ,
  },
  {
    color: "white",
    title: "Completed Tasks",
    description: "Last Campaign Performance",
    footer: "just updated",
    chart: completedTasksChart,
  },
];

export default statisticsChartsData;
