// import Image from "next/image";
import Link from "next/link";
import React from "react";
import Cart from "~/icons/Cart.svg";

const Navbar = () => (
    <nav className= "tw-text-white bg-dark d-flex tw-justify-between tw-px-3 tw-py-3 tw-items-center tw-w-full tw-fixed tw-z-10">
      <Link href={"/"}>
        <h1>Logo</h1>
      </Link>
      <Cart className="tw-h-5 tw-w-5" />
    </nav>
);

export default Navbar;
