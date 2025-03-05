import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center m-2">
      <div className="flex flex-col justify-start ">
        <div>Welcome back Anish</div>
        <div>Checkout Today's weather info</div>
      </div>
      <div className="flex gap-2">
        <button className="bg-amber-200 cursor-pointer">...</button>
        <button className="rounded-full bg-red-300 cursor-pointer">
          Profile
        </button>
      </div>
    </div>
  );
};

export default Header;
