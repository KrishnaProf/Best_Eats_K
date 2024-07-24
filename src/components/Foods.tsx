import React, { useState } from "react" ;
import data from "../data/data.ts";

const Foods = () => {
  const [foods, setFoods] = useState(data);

  const filterType = (category: string) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  const filterPrice = (price: string) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="px-4">
      <div>
        <h1 className="text-orange-500 font-bold text-4xl flex justify-center">
          Top rated Menu Items
        </h1>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col px-4">
          <div>
            <p className="font-bold">Filter Type</p>
          </div>
          <div className="flex justify-between flex-wrap ">
            <button
              onClick={() => setFoods(data)}
              className="m-1 text-orange-500 border-orange-600 hover:bg-orange-600 hover:text-white "
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="m-1 text-orange-500 border-orange-600 hover:bg-orange-600 hover:text-white "
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="m-1 text-orange-500 border-orange-600 hover:bg-orange-600 hover:text-white "
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salads")}
              className="m-1 text-orange-500 border-orange-600 hover:bg-orange-600 hover:text-white "
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="m-1 text-orange-500 border-orange-600 hover:bg-orange-600 hover:text-white "
            >
              Chicken
            </button>
          </div>
        </div>
        <div className="flex flex-col px-4">
          <div>
            <p className="font-bold">Filter Price</p>
          </div>
          <div>
            <button
              onClick={() => filterPrice("$")}
              className="text-orange-500 border-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="text-orange-500 border-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="text-orange-500 border-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="text-orange-500 border-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 ">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-xl rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt="/"
              className="object-cover w-full h-[200px]"
            />
            <div className="flex justify-between px-2 py-4 ">
              <p className="font-bold">{item.name}</p>
              <span className="bg-orange-500 text-white rounded-full p-1">
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foods;
