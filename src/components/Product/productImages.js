import { React, useState } from "react";
import { urlFor } from "~/lib/client";

function Productimagess({ images }) {
  const [currentImage, setCurrentImage] = useState("currentImage");

  return (
    <div className="tw-flex tw-flex-col tw-space-y-2">
      {images && (
        <img
          className="tw-max-w-[600px] tw-max-h-[600px] tw-w-8/10 tw-border tw-p-6 tw-object-scale-down bg-white"
          src={urlFor(images && images[0])}
        />
      )}
      <div className="tw-flex tw-justify-between tw-space-x-1">
        {images && (
          <img
            src={urlFor(images && images[0])}
            className="tw-border tw-border-neutral-300 rounded-2 tw-object-scale-down tw-w-32 tw-h-32"
          />
        )}
        {images && (
          <img
            src={urlFor(images && images[0])}
            className="tw-border tw-border-neutral-300 rounded-2 tw-object-scale-down tw-w-32 tw-h-32"
          />
        )}
        {images && (
          <img
            src={urlFor(images && images[0])}
            className="tw-border tw-border-neutral-300 rounded-2 tw-object-scale-down tw-w-32 tw-h-32"
          />
        )}
        {images && (
          <img
            src={urlFor(images && images[0])}
            className="tw-border tw-border-neutral-300 rounded-2 tw-object-scale-down tw-w-32 tw-h-32"
          />
        )}
      </div>
    </div>
  );
}
export default Productimagess;
