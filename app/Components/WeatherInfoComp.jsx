import React from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const WeatherInfoComp = () => {
  return (
    <div className="bg-blue-600 w-1/3 h-full rounded-[20px] flex flex-col gap-7 p-4">
      <div className="headerSection flex justify-between">
        <button className="cursor-pointer">Add</button>
        <div className="flex gap-2">
          <Label>C</Label>
          <Switch className="cursor-pointer" />
          <Label>F</Label>
        </div>
      </div>
      <div className="locationSection flex justify-between ">
        <div className="flex flex-col gap-3">
          <div>Location</div>
          <div>Date</div>
        </div>
        <div className="flex flex-col gap-2">
          <div>sunrise Time</div>
          <div>sunset Time</div>
        </div>
      </div>
      <div className="tempSection flex flex-col justify-center items-center gap-2">
        <h1>Current Temperature</h1>
        <h3>weather Type</h3>
      </div>
    </div>
  );
};

export default WeatherInfoComp;
