import React from "react";
import classNames from "classnames";
import Link from "next/link";

const Button = ({ children, link, className, outline }) => (
  <a href={link}>
    <span
      className={classNames(
        "tw-py-2 tw-px-4 tw-duration-500 tw-rounded-lg tw-w-1/5 tw-text-center tw-border-2 tw-border-white tw-no-underline",
        outline
          ? "tw-border-red-500 tw-text-red-500 hover:tw-bg-red-500 hover:tw-text-white tw-border-2"
          : "tw-bg-red-500 hover:tw-border-red-500 tw-text-white hover:tw-text-black hover:tw-bg-white",
        className
      )}
    >
      {children}
    </span>
  </a>
);
export default Button;
