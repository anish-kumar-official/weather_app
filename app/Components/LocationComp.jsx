import React from "react";
import Header from "./Header";
import WeatherInfoCard from "./WeatherInfoCard";

const weathaerInfoList = [
  { name: "Humidity", image: "image" },
  { name: "Wind", image: "image" },
  { name: "Precitipation", image: "image" },
  { name: "UV Index", image: "image" },
  { name: "Feels Like", image: "image" },
  { name: "Chances of Rain", image: "image" },
];

const LocationComp = () => {
  return (
    <div className="bg-blue-300 w-full h-full rounded-[20px] p-4">
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {weathaerInfoList.map((item, index) => (
          <WeatherInfoCard key={index} name={item.name} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default LocationComp;
