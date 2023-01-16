import React from "react";
import Fb from "~/icons/Fb.svg";
import Gh from "~/icons/Gh.svg";
import Ig from "~/icons/Ig.svg";
import Tg from "~/icons/Tg.svg";

const Footer = () => (
  <section className="tw-text-white bg-dark tw-flex tw-w-full tw-justify-center tw-mt-auto">
    <div className="tw-flex tw-h-[150px] tw-space-x-4 tw-items-center">
      <span className="">
        <Fb className="tw-p-1 tw-w-9 tw-h-9 tw-bg-white tw-border-0 tw-rounded-full tw-duration-500 tw-text-black hover:tw-bg-black hover:tw-text-white tw-cursor-pointer" />
      </span>
      <span className="tw-w-9 tw-h-9 tw-p-1 tw-bg-white tw-border-0 tw-rounded-full tw-duration-500 tw-text-black hover:tw-bg-black hover:tw-text-white tw-cursor-pointer">
        <Gh className="tw-w-7 tw-h-7 tw-scale-[1.4]" />
      </span>
      <span>
        <Tg className="tw-w-9 tw-h-9 tw-p-1 tw-bg-white tw-border-0 tw-rounded-full tw-duration-500 tw-text-black hover:tw-bg-black hover:tw-text-white tw-cursor-pointer" />
      </span>
      <span>
        <Ig className="tw-w-9 tw-h-9 tw-p-1 tw-bg-white tw-border-0 tw-rounded-full tw-duration-500 tw-text-black hover:tw-bg-black hover:tw-text-white tw-cursor-pointer" />
      </span>
    </div>
  </section>
);

export default Footer;
