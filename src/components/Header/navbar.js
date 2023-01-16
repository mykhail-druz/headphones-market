import Image from "next/image";
import Link from "next/link";
import React from "react";
import CartIcon from "~/icons/CartIcon.svg";
import Logo from "~/icons/logo.svg";

import { useStateContext } from "~/context/StateContext";
import Cart from "../Cart/cart";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <nav className="tw-text-white bg-dark d-flex tw-justify-between tw-px-3 tw-py-3 tw-items-center tw-w-full tw-fixed tw-z-10">
      <Link href={"/"} className="tw-flex tw-items-center tw-text-white hover:tw-text-blue-500 tw-duration-500">
        <Logo className="tw-w-12 tw-h-12"/>
        <h1 className="tw-text-2xl">
          e-USHKI
        </h1>
      </Link>
      <button className="tw-h-7 tw-w-7 tw-text-white hover:tw-text-blue-500 tw-duration-500 tw-cursor-pointer" onClick={() => setShowCart(true)}>
        <CartIcon />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </nav>
  );
};

export default Navbar;
