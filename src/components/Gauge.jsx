// src/components/Gauge.jsx
import React from "react";

const Gauge = ({ value }) => {
  const angle = (value / 100) * 57;
  const needleRotation = angle - 100;

  const getColor = (value) => {
    if (value < 20) return "#ef4444";
    if (value < 40) return "#f97316";
    if (value < 60) return "#facc15";
    if (value < 80) return "#a3e635";
    return "#22c55e";
  };
  const getLevelData = (value) => {
  const numValue = parseInt(value) || 0;
  
  const levels = [
    { 
      name: "Extreme Fear", 
      range: [0, 20],
      color: "text-red-500",
      bgColor: "bg-red-900/30",
      emoji: "😱"
    },
    { 
      name: "Fear", 
      range: [20, 40],
      color: "text-orange-400",
      bgColor: "bg-orange-900/20",
      emoji: "😨"
    },
    { 
      name: "Neutral", 
      range: [40, 60],
      color: "text-yellow-400",
      bgColor: "bg-yellow-900/20",
      emoji: "😐"
    },
    { 
      name: "Greed", 
      range: [60, 80],
      color: "text-lime-400",
      bgColor: "bg-lime-900/20",
      emoji: "😏"
    },
    { 
      name: "Extreme Greed", 
      range: [80, 100],
      color: "text-green-500",
      bgColor: "bg-green-900/30",
      emoji: "🤑"
    }
  ];
  return levels.find(level => numValue >= level.range[0] && numValue < level.range[1]) || levels[0];
};

  const endX = 100 + 90 * Math.cos((angle * Math.PI) / 180);
  const endY = 100 - 90 * Math.sin((angle * Math.PI) / 180);

  return (
    <div
      className="flex flex-col items-center bg-gray-700 p-3 rounded-xl shadow-md w-[290px]"
      role="meter"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div className="relative w-44 h-24">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <path
            d="M 10 100 A 90 90 0 0 1 190 100"
            fill="none"
            stroke="#2d2d2d"
            strokeWidth="20"
          />
          <path
            d={`M 10 100 A 90 90 0 ${angle > 180 ? 1 : 0} 1 ${endX} ${endY}`}
            fill="none"
            stroke={getColor(value)}
            strokeWidth="20"
            strokeLinecap="round"
            style={{ transition: "stroke-dasharray 0.3s ease-in-out" }}
          />
        </svg>
        <div
          className="w-4 h-4 bg-white rounded-full absolute top-0 left-1/2 -translate-x-1/2"
          style={{
            transform: `rotate(${needleRotation}deg) translateY(60px)`,
            transformOrigin: " 15px",
            transition: "transform 0.3s ease-in-out",
          }}
        />
      </div>
      <div className="text-white text-3xl font-bold">{value}</div>
    <div className={`text-sm px-3 py-1 rounded-full ${getLevelData(value).bgColor} ${getLevelData(value).color}`}>
      <span className="mr-2">{getLevelData(value).emoji}</span>
       {getLevelData(value).name}
    </div>
    </div>
  );
};

export default Gauge;
