import React from "react";
import classNames from "classnames";
import Link from "next/link";

const Button = ({ children, link, className, outline }) => (
  <a
    className={classNames(
      "tw-py-2 tw-px-4 tw-duration-500 tw-rounded-lg tw-text-center tw-border-2 tw-border-white tw-no-underline",
      outline
        ? "tw-border-red-500 tw-text-black hover:tw-bg-red-500 hover:tw-text-white tw-border-2"
        : "tw-bg-red-500 hover:tw-border-red-500 tw-text-white hover:tw-text-black tw-border-2 hover:tw-bg-white tw-border-red-500",
      className
    )}
    href={link}
  >
    {children}
  </a>
);
export default Button;
