import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import WindowIcon from "@mui/icons-material/Window";
import MenuIcon from "@mui/icons-material/Menu";
import Card from "../Card/Card.jsx";

function Content() {
  const pizza = {
    title: "Margirita Pizza",
    image:"data:image/jpeg;base64,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",
    description:
      " Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed doeiusmod tempor incididunt utss labore et dolore magna aliqua..",
    rating: "2/5",
    star: 1,
    price: "$20.00",
  };
  const drinks = {
    title: "Lemonade",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3E_EjzT-dC9T2iNsAi03jhBXj0GfIEM5TdA&usqp=CAU",
    description:
      " Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed doeiusmod tempor incididunt utss labore et dolore magna aliqua..",
    rating: "3.5/5",
    star: 3,
    price: "$15.00",
  };
  return (
    <div className="bg-blue-100 w-full rounded-r-2xl overflow-y-scroll">
      <div className="flex justify-evenly h-8  mt-3 mx-3 ">
        <div className="flex items-center bg-white w-3/6 h-full rounded-full">
          <SearchIcon />
          <input
            className="bg-transparent border-none outline-none"
            placeholder="Search"
            type="input"
          ></input>
        </div>
        <div className="flex justify-center items-center bg-white h-full w-8 rounded-full">
          <WindowIcon />
        </div>
        <div className="flex justify-center items-center bg-white h-full w-8 rounded-full">
          <MenuIcon />
        </div>
        <button className="w-1/6 bg-teal-400 hover:bg-teal-600 text-white rounded-full">
          Add New
        </button>
        <button className="w-1/6 bg-red-600 hover:bg-red-400 text-white rounded-full">
          Delete
        </button>
      </div>
      <div className="mt-3 mx-3">
        <div className="text-xl font-bold ml-16">Pizzas(4)</div>
        <div className="flex flex-wrap justify-evenly mt-2">
          <Card data={pizza} />
          <Card data={pizza} />
          <Card data={pizza} />
          <Card data={pizza} />
        </div>
      </div>
      <div className="mt-3 mx-3">
        <div className="text-xl font-bold ml-16">Drinks(4)</div>
        <div className="flex flex-wrap justify-evenly mt-2">
          <Card data={drinks} />
          <Card data={drinks} />
          <Card data={drinks} />
          <Card data={drinks} />
        </div>
      </div>
    </div>
  );
}

export default Content;