import { React, useState } from "react";
import classNames from "classnames";
import { urlFor } from "~/lib/client";

function Productimagess({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="flex flex-col md:flex-row lg:flex-col space-x-0 space-y-1 md:space-x-1 md:space-y-0 lg:space-x-0 lg:space-y-1 lg:justify-start">
      {images && (
        <img
          className="sm:max-w-[300px] sm:max-h-[300px]
           sm:min-w-[250px] sm:min-h-[250px]
            lg:max-w-[400px] lg:max-h-[400px] lg:min-w-[400px] lg:min-h-[400px]
             w-8/10 border p-6 object-scale-down bg-white"
          src={urlFor(images && images[currentImage])}
        />
      )}
      <div
        className={classNames(
          "flex lg:flex-row md:flex-col space-x-1 md:space-x-0 md:space-y-1 lg:space-y-0 lg:space-x-1 ",
          images[1] && images[2] && images[3] ? "justify-between" : ""
        )}
      >
        {images[0] && (
          <div onClick={() => setCurrentImage(0)}>
            <img
              src={urlFor(images && images[0])}
              className={classNames(
                "border  cursor-pointer rounded-2 object-scale-down w-24 h-24 lg:w-32 lg:h-32",
                currentImage === 0 ? "border-red-500" : "border-neutral-300"
              )}
            />
          </div>
        )}
        {images[1] && (
          <div onClick={() => setCurrentImage(1)}>
            <img
              src={urlFor(images && images[1])}
              className={classNames(
                "border rounded-2 object-scale-down w-24 h-24 lg:w-32 lg:h-32 ",
                currentImage === 1
                  ? "border-red-500"
                  : "border-neutral-300 cursor-pointer"
              )}
            />
          </div>
        )}
        {images[2] && (
          <div onClick={() => setCurrentImage(2)}>
            <img
              src={urlFor(images && images[2])}
              className={classNames(
                "cursor-pointer border rounded-2 object-scale-down w-24 h-24 lg:w-32 lg:h-32",
                currentImage === 2
                  ? "border-red-500"
                  : "border-neutral-300 cursor-pointer"
              )}
            />
          </div>
        )}
      </div>
    </div>
  );
}
export default Productimagess;
