import Link from "next/link";
import React from "react";
import CartIcon from "~/icons/CartIcon.svg";

import { useStateContext } from "~/context/StateContext";
import Cart from "../Cart/cart";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <nav className="text-white bg-black flex justify-between px-6 py-3 items-center w-full fixed z-10">
      <Link
        href={"/"}
        className="flex items-center text-white hover:text-secondary duration-500"
      >
        <h1 className="text-2xl">e-USHKI</h1>
      </Link>
      <button
        className="h-7 w-7 text-white hover:text-secondary duration-500 cursor-pointer"
        onClick={() => setShowCart(true)}
      >
        <CartIcon />
        <span className="absolute right-3 -bottom-1 bg-secondary rounded-full w-5 h-5 text-center text-sm hover:text-white text-white">
          {totalQuantities}
        </span>
      </button>

      {showCart && <Cart />}
    </nav>
  );
};

export default Navbar;
