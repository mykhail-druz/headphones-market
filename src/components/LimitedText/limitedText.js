import React, { useState } from "react";

function LimitText({ text, limit }) {
  const [showFullText, setShowFullText] = useState(false);
  /* eslint-disable*/
  const [limitText, setlimitText] = useState(text);

  const handleShowMore = () => {
    setShowFullText(true);
  };

  const handleHide = () => {
    setShowFullText(false);
  };

  return (
    <div>
      <span>{showFullText ? limitText : limitText.slice(0, limit)}</span>
      {showFullText ? (
        <p
          className="text-red-600 hover:text-red-300 duration-500 cursor-pointer"
          onClick={handleHide}
        >
          Сховати
        </p>
      ) : (
        <p
          className="text-red-600 hover:text-red-300 duration-500 cursor-pointer"
          onClick={handleShowMore}
        >
          Показати більше
        </p>
      )}
    </div>
  );
}
export default LimitText;
