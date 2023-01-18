import React, { useState } from "react";

function LimitText({ text, limit }) {
  const [showFullText, setShowFullText] = useState(false);
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
          className="tw-text-red-600 hover:tw-text-red-300 tw-duration-500 tw-cursor-pointer"
          onClick={handleHide}
        >
          Сховати
        </p>
      ) : (
        <p
          className="tw-text-red-600 hover:tw-text-red-300 tw-duration-500 tw-cursor-pointer"
          onClick={handleShowMore}
        >
          Показати більше
        </p>
      )}
    </div>
  );
}
export default LimitText;
