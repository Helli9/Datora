// src/components/Gauge.jsx
import React from "react";

const Gauge = ({ value }) => {
  const clampedValue = Math.max(0, Math.min(100, parseInt(value) || 0));
  const angle = (clampedValue / 100) * 180;
  const needleRotation = angle - 60;

  const getColor = (value) => {
    if (value < 20) return "#ef4444";
    if (value < 40) return "#f97316";
    if (value < 60) return "#facc15";
    if (value < 80) return "#a3e635";
    return "#22c55e";
  };

  const endX = 100 + 90 * Math.cos((angle * Math.PI) / 180);
  const endY = 100 - 90 * Math.sin((angle * Math.PI) / 180);

  return (
    <div
      className="flex flex-col items-center bg-gray-800 p-6 rounded-xl shadow-md w-[270px]"
      role="meter"
      aria-valuenow={clampedValue}
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
            stroke={getColor(clampedValue)}
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
      <div className="text-white mt-4 text-3xl font-bold">{clampedValue}</div>
      <div className="text-blue-gray-200 text-sm">
        {clampedValue < 50 ? "Fear" : "Greed"}
      </div>
    </div>
  );
};

export default Gauge;
