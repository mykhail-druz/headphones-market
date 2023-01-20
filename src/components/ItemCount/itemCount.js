import React from "react";
import classNames from "classnames";

const ItemCount = ({
  qty, incQty, decQty, className,
}) => {
  return (
    <>
      <div
        className={classNames(
          "border flex justify-between p-2 items-center w-1/3 border-primary text-primary",
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
