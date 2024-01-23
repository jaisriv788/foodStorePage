import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Filter from "../Filter/Filter.jsx";
import Content from "../Content/Content.jsx";

function Body() {
  return (
    <>
      <div className="flex h-screen w-auto mt-4 sm:ml-9">
        <Navbar />
        <div className="flex h-5/6 w-11/12 bg-white text-black rounded-2xl">
          <Filter />
          <hr className="hidden sm:block border-2 border-gray-300 h-full" />
          <Content />
        </div>
      </div>
    </>
  );
}

export default Body;
