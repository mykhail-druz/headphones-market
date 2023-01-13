// import Image from "next/image";
import Link from "next/link";
import React from "react";
import Cart from "~/icons/Cart.svg";

const Navbar = () => (
  <nav className="tw-text-white bg-dark d-flex tw-justify-between tw-px-3 tw-py-3 tw-items-center tw-w-full tw-fixed tw-z-10">
    <Link href={"/"}>
      <h1 className="tw-text-2xl tw-text-white hover:tw-text-blue-500 tw-duration-500">
        Logo
      </h1>
    </Link>
    <div className="tw-h-7 tw-w-7 tw-text-white hover:tw-text-blue-500 tw-duration-500 tw-cursor-pointer">
      <Cart />
    </div>
  </nav>
);

export default Navbar;
