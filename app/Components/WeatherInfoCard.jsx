import React from "react";

const WeatherInfoCard = ({ name, image }) => {
  return (
    <div className="w-[180px] h-[100px] rounded-xl flex flex-col gap-2 border border-red-600 p-2">
      <div className="flex justify-between">
        <span>{name}</span>
        <div>{image}</div>
      </div>
      <div className="flex justify-center items-center">Detail</div>
      <div>Chart</div>
    </div>
  );
};

export default WeatherInfoCard;
