import React from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { BsFillSaveFill } from "react-icons/bs";

const Navbar = () => {
  const [Nav, setNav] = React.useState(false);

  const toggleNav = () => {
    setNav(!Nav);
  };

  return (
    <div>
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center">
          <AiOutlineMenu size={30} className="mx-2 " onClick={toggleNav} />
          <h1 className="text-2xl md:text-3xl lg:text-4xl px-2 flex flex-nowrap">
            Best <span className="font-bold">Eats</span>
          </h1>
          <div className="bg-slate-200 mx-2 py-3 rounded-full">
            <span className="m-1 px-2 py-2 bg-black text-white rounded-full">
              Delivery
            </span>
            <span className="m-2">Pickup</span>
          </div>
        </div>
        <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg: w-[500px] ">
          <AiOutlineSearch size={25} />
          <input
            type="text"
            placeholder="Search foods"
            className="bg-transparent focus:outline-none p-2 w-full"
          />
        </div>

        <div className="flex items-center bg-black rounded-full h-10 w-30 mx-2">
          <AiOutlineShoppingCart size={20} className="text-white mx-2" />
          <button className="text-white p-2 border-none">Cart</button>
        </div>
      </div>

      {/* Overlay */}
      {Nav ? (
        <div className="bg-black/80 fixed w-full h-screen left-0 top-0 z-10"></div>
      ) : (
        ""
      )}

      {/* Side Menu */}
      <div
        className={
          Nav
            ? "bg-white fixed top-0 left-0 w-[300px] h-screen z-10 duration-300"
            : "bg-white fixed top-0 left-[-300px] w-[300px] h-screen z-10 duration-300"
        }
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl p-4">
            Best <span className="font-bold">Eats </span>
          </h2>

          <AiOutlineClose size={25} className="m-2" onClick={toggleNav} />
        </div>

        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" /> Favorites
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="text-xl py-4 flex">
              <BsFillSaveFill size={25} className="mr-4" /> Best Ones
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
