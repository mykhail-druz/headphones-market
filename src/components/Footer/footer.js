import React from "react";
import Fb from "~/icons/Fb.svg";
import Gh from "~/icons/Gh.svg";
import Ig from "~/icons/Ig.svg";
import Tg from "~/icons/Tg.svg";
import Link from "next/link";

const Footer = () => (
  <section className="tw-text-white bg-dark tw-flex tw-w-full tw-justify-center tw-mt-auto">
    <div className="tw-flex tw-h-[150px] tw-space-x-4 tw-items-center">
      <Link href="https://www.facebook.com/profile.php?id=100007224617013" target="_blank"
      className=" tw-bg-white tw-border-0 tw-rounded-full tw-w-9 tw-h-9 tw-duration-500 tw-text-black hover:tw-bg-black hover:tw-text-white tw-cursor-pointer">
        <Fb className="tw-p-1" />
      </Link>
      <Link href="https://github.com/mykhail-druz/headphones-market" target="_blank"
      className="tw-w-9 tw-h-9 tw-p-1 tw-bg-white tw-border-0 tw-rounded-full tw-duration-500 tw-text-black hover:tw-bg-black hover:tw-text-white tw-cursor-pointer">
        <Gh className="tw-w-7 tw-h-7 tw-scale-[1.4]" />
      </Link>
      <Link href="https://t.me/mykhail_druz" target="_blank"
      className="tw-bg-white tw-border-0 tw-rounded-full tw-duration-500 tw-text-black hover:tw-bg-black hover:tw-text-white tw-cursor-pointer">
        <Tg className="tw-w-9 tw-h-9 tw-p-1 " />
      </Link>
      <Link href="https://www.instagram.com/mykhail.druz/" target="_blank"
       className="tw-bg-white tw-border-0 tw-rounded-full tw-duration-500 tw-text-black hover:tw-bg-black hover:tw-text-white tw-cursor-pointer">
        <Ig className="tw-w-9 tw-h-9 tw-p-1" />
      </Link>
    </div>
  </section>
);

export default Footer;
