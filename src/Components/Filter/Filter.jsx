import React, { useState } from "react";

function Filter() {
  const [isChecked, setIsChecked] = useState(false);
  const [rangeValue, setRangeValue] = useState(20);

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  function handleRange(e) {
    setRangeValue(e.target.value);
  }

  return (
    <div className="bg-white rounded-2xl w-3/12 ">
      <div className=" mt-2 ml-4 text-blue-950 ">
        <div className="text-2xl mb-2 font-bold">Items</div>
        <div className="my-1">
          <div className="flex justify-between">
            <div className="text-lg font-bold">Filters</div>
            <div>
              <a className="underline mr-4 hover:text-blue-400 cursor-pointer">
                clear all
              </a>
            </div>
          </div>
          <div className="flex flex-col text-xs mt-2">
            <label className="inline-flex items-center mb-1">
              <input
                type="checkbox"
                className="checkbox checkbox-xs"
                checked={isChecked}
                onClick={handleCheckboxChange}
              />
              <span className="ml-2">All Items</span>
            </label>
            <label className="inline-flex items-center mb-1">
              <input
                type="checkbox"
                className="checkbox checkbox-xs"
                checked={isChecked}
                onClick={handleCheckboxChange}
              />
              <span className="ml-2">Filter 1</span>
            </label>
            <label className="inline-flex items-center mb-1">
              <input
                type="checkbox"
                className="checkbox checkbox-xs"
                checked={isChecked}
                onClick={handleCheckboxChange}
              />
              <span className="ml-2">Filter 2</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="checkbox checkbox-xs"
                checked={isChecked}
                onClick={handleCheckboxChange}
              />
              <span className="ml-2">Filter 3</span>
            </label>
          </div>
        </div>
        <hr />
        <div className="my-1">
          <div className="flex justify-between">
            <div className="text-lg font-bold">Taste</div>
            <div>
              <a className="underline mr-4 hover:text-blue-400 cursor-pointer">
                clear all
              </a>
            </div>
          </div>
          <div className="flex flex-col text-xs mt-2">
            <label className="inline-flex items-center mb-1">
              <input
                type="checkbox"
                className="checkbox checkbox-xs"
                checked={isChecked}
                onClick={handleCheckboxChange}
              />
              <span className="ml-2">All Items</span>
            </label>
            <label className="inline-flex items-center mb-1">
              <input
                type="checkbox"
                className="checkbox checkbox-xs"
                checked={isChecked}
                onClick={handleCheckboxChange}
              />
              <span className="ml-2">Filter 1</span>
            </label>
            <label className="inline-flex items-center mb-1">
              <input
                type="checkbox"
                className="checkbox checkbox-xs"
                checked={isChecked}
                onClick={handleCheckboxChange}
              />
              <span className="ml-2">Filter 2</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="checkbox checkbox-xs"
                checked={isChecked}
                onClick={handleCheckboxChange}
              />
              <span className="ml-2">Filter 3</span>
            </label>
          </div>
        </div>
        <hr />
        <div className="my-1">
          <div className="flex justify-between">
            <div className="text-xl font-bold">Taste</div>
            <div>
              <a className="underline mr-4 hover:text-blue-400 cursor-pointer">
                clear all
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              type="range"
              min={0}
              max="200"
              value={rangeValue}
              onChange={handleRange}
              className="range range-xs w-11/12"
            />
            <div className="text-xs">$0 - ${rangeValue}</div>
          </div>
        </div>
        <hr />
        <div className="my-1">
          <div className="flex justify-between">
            <div className="text-lg font-bold">Rating</div>
            <div>
              <a className="underline mr-4 hover:text-blue-400 cursor-pointer">
                clear all
              </a>
            </div>
          </div>
          <div>
            <div className="rating">
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star"
                checked
              />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
            </div>
          </div>
        </div>
        <hr />
        <div className="my-1">
          <div className="flex justify-between">
            <div className="text-lg font-bold">Country</div>
            <div>
              <a className="underline mr-4 hover:text-blue-400 cursor-pointer">
                clear all
              </a>
            </div>
          </div>
          <div className="flex flex-col text-xs mt-2">
            <label className="inline-flex items-center mb-1">
              <input
                type="checkbox"
                className="checkbox checkbox-xs"
                checked={isChecked}
                onClick={handleCheckboxChange}
              />
              <span className="ml-2">All Items</span>
            </label>
            <label className="inline-flex items-center mb-1">
              <input
                type="checkbox"
                className="checkbox checkbox-xs"
                checked={isChecked}
                onClick={handleCheckboxChange}
              />
              <span className="ml-2">Filter 1</span>
            </label>
            <label className="inline-flex items-center mb-1">
              <input
                type="checkbox"
                className="checkbox checkbox-xs"
                checked={isChecked}
                onClick={handleCheckboxChange}
              />
              <span className="ml-2">Filter 2</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="checkbox checkbox-xs"
                checked={isChecked}
                onClick={handleCheckboxChange}
              />
              <span className="ml-2">Filter 3</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
