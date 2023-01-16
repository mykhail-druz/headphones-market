import React from "react";

const ItemCount = ({ qty, incQty, decQty }) => {

  return (
    <div>
      <div className="tw-border tw-flex tw-justify-between tw-p-2 tw-items-center tw-w-1/3">
        <button
          className="tw-text-2xl"
          onClick={decQty}>
          -
        </button>
        <p className="tw-text-xl"> {qty}</p>
        <button
          className="tw-text-2xl"
          onClick={incQty}>
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
