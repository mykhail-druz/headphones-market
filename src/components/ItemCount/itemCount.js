import React, { useState } from "react";

const ItemCount = () => {
  const [itemCount, setItemCount] = useState(1);

  return (
    <div>
      <div className="tw-border tw-flex tw-justify-between tw-p-2 tw-items-center tw-w-1/3">
        <button
          className="tw-text-2xl"
          onClick={() => itemCount > 1 && setItemCount(itemCount - 1)}
        >
          -
        </button>
        <p className="tw-text-xl"> {itemCount}</p>
        <button
          className="tw-text-2xl"
          onClick={() => itemCount < 99 && setItemCount(itemCount + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
