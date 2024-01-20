import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import WindowIcon from "@mui/icons-material/Window";
import MenuIcon from "@mui/icons-material/Menu";
import Card from "../Card/Card.jsx";

function Content() {
  const pizza = {
    title: "Margirita Pizza",
    image:"../../../public/p.jpeg",
    description:
      " Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed doeiusmod tempor incididunt utss labore et dolore magna aliqua..",
    rating: "2/5",
    star: 1,
    price: "$20.00",
  };
  const drinks = {
    title: "Lemonade",
    image:"../../../public/l1.jpeg",
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
