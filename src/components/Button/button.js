import React from "react";
import classNames from "classnames";
import Link from "next/link";

const Button = ({
  children,
  link,
  className,
  outline,
  product,
  onAdd,
  qty,
}) => {
  return (
    <div onClick={() => onAdd(product, qty)}>
      <p
        className={classNames(
          "py-2 px-4 duration-500 rounded-lgs w-full text-center border-2 border-white no-underline",
          outline
            ? "border-secondary text-secondary hover:bg-secondary hover:text-white border-2"
            : "bg-secondary border-secondary hover:border-secondary text-white hover:text-secondary hover:bg-black",
          className
        )}
      >
        {children}
      </p>
    </div>
  );
};

export default Button;
