import React from "react";

function Header() {
  return (
    <div className="flex justify-between">
      <img
        src="../../../public/creativity.png"
        className="h-9 w-9 mt-4 ml-4 "
      />
      <div className="flex mt-4 mr-4">
        <div className="flex flex-col items-center">
          <p className="">PiciZsolti</p>
          <div className="text-sm bg-red-700 px-2 rounded-full">
            Administrator
          </div>
        </div>
        <div className="avatar placeholder  ">
          <div className="bg-white text-black rounded-full w-12">
            <span>SY</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
