import React from "react";
import LocationComp from "./LocationComp";
import WeatherInfoComp from "./WeatherInfoComp";

const Dashboard = () => {
  return (
    <div className="flex w-[1050px] h-[900px] items-center justify-center border border-red-500 my-6 rounded-[20px]">
      <WeatherInfoComp />
      <LocationComp />
    </div>
  );
};

export default Dashboard;
