import React from "react";
import Link from "next/link";

import Fb from "~/icons/Fb.svg";
import Gh from "~/icons/Gh.svg";
import Ig from "~/icons/Ig.svg";
import Tg from "~/icons/Tg.svg";

const Footer = () => (
  <section className="text-white bg-black flex w-full justify-center mt-auto">
    <div className="flex h-[100px] space-x-4 items-center">
      <Link
        href="https://www.facebook.com/profile.php?id=100007224617013"
        target="_blank"
        className=" bg-white border-0 rounded-full duration-500 text-black hover:bg-black hover:text-white cursor-pointer"
      >
        <Fb className="p-1 w-9 h-9" />
      </Link>
      <Link
        href="https://github.com/mykhail-druz/headphones-market"
        target="_blank"
        className="w-9 h-9 p-1 bg-white border-0 rounded-full duration-500 text-black hover:bg-black hover:text-white cursor-pointer"
      >
        <Gh className="w-7 h-7 scale-[1.4]" />
      </Link>
      <Link
        href="https://t.me/mykhail_druz"
        target="_blank"
        className="bg-white border-0 rounded-full duration-500 text-black hover:bg-black hover:text-white cursor-pointer"
      >
        <Tg className="w-9 h-9 p-[3px] mr-[1px]" />
      </Link>
      <Link
        href="https://www.instagram.com/mykhail.druz/"
        target="_blank"
        className="bg-white border-0 rounded-full duration-500 text-black hover:bg-black hover:text-white cursor-pointer"
      >
        <Ig className="w-9 h-9 p-1" />
      </Link>
    </div>
  </section>
);

export default Footer;
