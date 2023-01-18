import { React, useState } from "react";
import { urlFor } from "~/lib/client";
import classNames from "classnames";

function Productimagess({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="tw-flex tw-flex-col md:tw-flex-row lg:tw-flex-col tw-space-x-0 tw-space-y-1 md:tw-space-x-1 md:tw-space-y-0 lg:tw-space-x-0 lg:tw-space-y-1 lg:tw-justify-start">
      {images && (
        <img
          className="sm:tw-max-w-[300px] sm:tw-max-h-[300px]
           sm:tw-min-w-[250px] sm:tw-min-h-[250px]
            lg:tw-max-w-[400px] lg:tw-max-h-[400px] lg:tw-min-w-[400px] lg:tw-min-h-[400px]
             tw-w-8/10 tw-border tw-p-6 tw-object-scale-down tw-bg-white"
          src={urlFor(images && images[currentImage])}
        />
      )}
      <div
        className={classNames(
          "tw-flex lg:tw-flex-row md:tw-flex-col tw-space-x-1 md:tw-space-x-0 md:tw-space-y-1 lg:tw-space-y-0 lg:tw-space-x-1 ",
          images[1] && images[2] && images[3] ? "tw-justify-between" : ""
        )}
      >
        {images[0] && (
          <div onClick={() => setCurrentImage(0)}>
            <img
              src={urlFor(images && images[0])}
              className={classNames(
                "tw-border  tw-cursor-pointer tw-rounded-2 tw-object-scale-down tw-w-24 tw-h-24 lg:tw-w-32 lg:tw-h-32",
                currentImage === 0
                  ? "tw-border-red-500"
                  : "tw-border-neutral-300"
              )}
            />
          </div>
        )}
        {images[1] && (
          <div onClick={() => setCurrentImage(1)}>
            <img
              src={urlFor(images && images[1])}
              className={classNames(
                "tw-border tw-rounded-2 tw-object-scale-down tw-w-24 tw-h-24 lg:tw-w-32 lg:tw-h-32 ",
                currentImage === 1
                  ? "tw-border-red-500"
                  : "tw-border-neutral-300 tw-cursor-pointer"
              )}
            />
          </div>
        )}
        {images[2] && (
          <div onClick={() => setCurrentImage(2)}>
            <img
              src={urlFor(images && images[2])}
              className={classNames(
                "tw-cursor-pointer tw-border tw-rounded-2 tw-object-scale-down tw-w-24 tw-h-24 lg:tw-w-32 lg:tw-h-32",
                currentImage === 2
                  ? "tw-border-red-500"
                  : "tw-border-neutral-300 tw-cursor-pointer"
              )}
            />
          </div>
        )}
      </div>
    </div>
  );
}
export default Productimagess;
