import React from "react";
import classNames from "classnames";
import Link from "next/link";

const Button = ({
  children,

  className,
  outline,
  onClick,
}) => {
  return (
    <div onClick={onClick}>
      <p
        className={classNames(
          "py-2 px-4 duration-500 rounded-lgs w-full text-center border-2 border-white no-underline cursor-pointer",
          outline
            ? "border-secondary text-secondary hover:bg-secondary hover:text-white border-2"
            : "bg-secondary border-secondary hover:border-secondary text-white hover:text-secondary hover:bg-inherit",
          className,
        )}
      >
        {children}
      </p>
    </div>
  );
};

export default Button;
