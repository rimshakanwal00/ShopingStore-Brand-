import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Navbar(){
  return(
  <div className="flex justify-between bg-blue-400  "> 
    <h2 className="text-xl font-bold text-white p-4 pl-8 font-serif">Shop Store</h2>
    <ul className="flex  space-x-7 pr-11 p-4 place-content-center font-bold">
        <li >
            <Link to="/">Shop </Link>
        </li>
        <li >
            <Link >Conact Us </Link>
        </li>
        <li className="pr-11">
            <Link >About Us </Link>
        </li>
        <li className=" rounded-xl px-4 bg-orange-300 pt-1 cursor-pointer">
            <Link to="/Cart"><FaShoppingCart /></Link>
        </li>
    </ul>
  </div>
  )
}
export default Navbar;