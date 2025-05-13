import { chartsConfig } from "@/configs";

const puellMultiple = {
  type: "line",
  height: 300,
  series: [
    {
      name: "Puell Multiple",
      data: [50.5, 54.5, 54.5, 63.5, 56, 53.5, 55.5, 58, 51.5, 53, 47, 49.5, 64.5, 47.5, 59, 61, 56, 56.5, 59.5, 61, 55, 57.5, 68, 69.5, 58, 73, 64.5, 72, 63, 68.5],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#0288d1"],
    stroke: {
      width: 3, // Thinner line to emphasize dots
      curve: 'straight', // Straight lines between points
      lineCap: "round",
      dashArray: [0, 0], // Solid line (no dashes)
    },
    markers: {
      size: 6, // Slightly larger dots
      colors: ["#0288d1"], // Same as line color
      strokeColors: "#fff", // White border for contrast
      strokeWidth: 2, // Thicker border
      hover: {
        size: 8, // Enlarge on hover
      },
      shape: "circle", // Explicitly set as circles
    },
     xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "2025-04-10", "2025-04-11", "2025-04-12", "2025-04-13", "2025-04-14",
        "2025-04-15", "2025-04-16", "2025-04-17", "2025-04-18", "2025-04-19",
        "2025-04-20", "2025-04-21", "2025-04-22", "2025-04-23", "2025-04-24",
        "2025-04-25", "2025-04-26", "2025-04-27", "2025-04-28", "2025-04-29",
        "2025-04-30", "2025-05-01", "2025-05-02", "2025-05-03", "2025-05-04",
        "2025-05-05", "2025-05-06", "2025-05-07", "2025-05-08", "2025-05-09",
        "2025-05-10", "2025-05-11", "2025-05-12", "2025-05-13", "2025-05-14",
      ],
      type: 'datetime',
      labels: {
        style: {
          colors: '#666',
          fontSize: '12px'
        },
        formatter: function(value) {
          // Format dates as "MMM DD" (e.g., "Jan 01")
          return new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        }
      },
      axisBorder: {
        show: true,
        color: '#e0e0e0'
      },
      axisTicks: {
        show: true,
        color: '#e0e0e0'
      },
      tooltip: {
        enabled: true,
        formatter: function(value) {
          // More detailed date format in tooltip
          return new Date(value).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric',
            weekday: 'short'
          });
        }
      }
    },
  },
};



const MVRV = {
  type: "line",
  height: 300,
  series: [
    {
      name: "MVRV Z-score",
      data: [36.7, 39.15, 40.3, 39, 39.7, 39.14, 39.15, 39.43, 40, 39.6, 39.6, 41.43, 44.8, 44.8, 45.15, 45.57, 45.57, 45.42, 44.86, 45.57, 45, 45, 46.23, 44.42, 45.86, 44.86, 45, 46.3, 49.85, 49.7, 50.7],
    },
  ],
  options: {
    ...chartsConfig,
    chart: {
      // ... previous chart config ...
    },
    colors: ["#388e3c"],
    stroke: {
      width: 3,
      curve: 'smooth',
      lineCap: "round",
    },
    markers: {
      // ... previous markers config ...
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "2025-04-10", "2025-04-11", "2025-04-12", "2025-04-13", "2025-04-14",
        "2025-04-15", "2025-04-16", "2025-04-17", "2025-04-18", "2025-04-19",
        "2025-04-20", "2025-04-21", "2025-04-22", "2025-04-23", "2025-04-24",
        "2025-04-25", "2025-04-26", "2025-04-27", "2025-04-28", "2025-04-29",
        "2025-04-30", "2025-05-01", "2025-05-02", "2025-05-03", "2025-05-04",
        "2025-05-05", "2025-05-06", "2025-05-07", "2025-05-08", "2025-05-09",
        "2025-05-10", "2025-05-11", "2025-05-12", "2025-05-13", "2025-05-14",
      ],
      type: 'datetime',
      labels: {
        style: {
          colors: '#666',
          fontSize: '12px'
        },
        formatter: function(value) {
          // Format dates as "MMM DD" (e.g., "Jan 01")
          return new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        }
      },
      axisBorder: {
        show: true,
        color: '#e0e0e0'
      },
      axisTicks: {
        show: true,
        color: '#e0e0e0'
      },
      tooltip: {
        enabled: true,
        formatter: function(value) {
          // More detailed date format in tooltip
          return new Date(value).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric',
            weekday: 'short'
          });
        }
      }
    },
    // ... rest of your configuration ...
  },
};

const completedTasksChart = {
  ...MVRV,
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
    chart: puellMultiple,
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
    title: "Z-Score",
    description: "Bitcoin: MVRV Z-Score",
    footer: "latest 50.7",
    chart: MVRV,
  },
];

export default statisticsChartsData;
