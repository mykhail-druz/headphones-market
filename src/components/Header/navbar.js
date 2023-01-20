import Link from "next/link";
import React from "react";
import CartIcon from "~/icons/CartIcon.svg";

import { useStateContext } from "~/context/StateContext";
import Cart from "../Cart/cart";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <nav className="text-white bg-black flex justify-between px-3 py-3 items-center w-full fixed z-10">
      <Link
        href={"/"}
        className="flex items-center text-white hover:text-blue-500 duration-500"
      >
        <h1 className="text-2xl">e-USHKI</h1>
      </Link>
      <button
        className="h-7 w-7 text-white hover:text-blue-500 duration-500 cursor-pointer"
        onClick={() => setShowCart(true)}
      >
        <CartIcon />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </nav>
  );
};

export default Navbar;
