import React from "react";
import Fb from "~/icons/Fb.svg";
import Gh from "~/icons/Gh.svg";
import Ig from "~/icons/Ig.svg";
import Tg from "~/icons/Tg.svg";

const Footer = () => (
  <section className="tw-text-white bg-dark tw-flex tw-z-10 tw-w-full tw-justify-center">
    <div className="d-flex tw-h-[150px] tw-space-x-4 tw-items-center">
      <Fb className="tw-w-9 tw-h-9 tw-p-1 tw-bg-white tw-border-0 tw-rounded-full" />
      <Gh className="tw-w-9 tw-h-9 tw-p-1 tw-bg-white tw-border-0 tw-rounded-full" />
      <Tg className="tw-w-9 tw-h-9 tw-p-1 tw-bg-white tw-border-0 tw-rounded-full" />
      <Ig className="tw-w-9 tw-h-9 tw-p-1 tw-bg-white tw-border-0 tw-rounded-full" />
    </div>
  </section>
);

export default Footer;
