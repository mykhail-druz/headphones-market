import React from "react";
import classNames from "classnames";

const ItemCount = ({
  qty, incQty, decQty, className,
}) => {
  return (
    <>
      <div
        className={classNames(
          "border flex justify-between px-2 my-4 items-center lg:min-w-1/5 md:w-1/3 w-1/2 border-primary text-primary space-x-2",
          className,
        )}
      >
        <button className="text-4xl" onClick={decQty}>
          -
        </button>
        <p className="text-xl">{qty}</p>
        <button className="text-3xl" onClick={incQty}>
          +
        </button>
      </div>
    </>
  );
};

export default ItemCount;
