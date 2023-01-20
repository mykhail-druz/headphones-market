import React from "react";

const ItemCount = ({ qty, incQty, decQty }) => {
  return (
    <div>
      <div className="border flex justify-between p-2 items-center w-1/3">
        <button className="text-2xl" onClick={decQty}>
          -
        </button>
        <p className="text-xl"> {qty}</p>
        <button className="text-2xl" onClick={incQty}>
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
