import React from "react";

function Card({ data }) {
  return (
    <div className="flex w-4/5 xl:w-5/12 h-max mb-10 bg-white rounded-3xl">
      <img
        className="rounded-l-3xl h-32"
        src={data.image}
        width="150"
        alt="img"
      />
      <div className="flex flex-col justify-center ml-1">
        <div className="text-lg font-bold">{data.title}</div>
        <div className="text-xs">{data.description}</div>
        <div className="flex justify-between mt-3">
          <div className="flex h-full">
            <div className="rating rating-md ">
              <input
                type="radio"
                className="mask mask-star"
                checked={data.star == 1 ? true : false}
              />
              <input
                type="radio"
                className="mask mask-star"
                checked={data.star == 2 ? true : false}
              />
              <input
                type="radio"
                className="mask mask-star"
                checked={data.star == 3 ? true : false}
              />
              <input
                type="radio"
                className="mask mask-star"
                checked={data.star == 4 ? true : false}
              />
              <input
                type="radio"
                className="mask mask-star"
                checked={data.star == 5 ? true : false}
              />
            </div>
            <div className="text-xs pt-1 hidden lg:block">{data.rating}</div>
          </div>
          <div className="font-bold mr-3">{data.price}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
