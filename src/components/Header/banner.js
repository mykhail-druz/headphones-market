import classNames from "classnames";
import React, { useState, useEffect } from "react";
import { urlFor } from "~/lib/client";
import Button from "../Button/button";

function Banner({ banner }) {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBannerIndex((currentIndex) => {
        return currentIndex === banner.length - 1 ? 0 : currentIndex + 1;
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="flex flex-col">
      <div className="md:h-[60vh] w-full border bg-white">
        <div className="flex justify-between flex-col-reverse md:flex-row w-8/12 mx-auto h-full items-center">
          <div className="flex flex-col p-4 m-4 w-[325px] md:justify-start justify-center text-center md:text-left">
            <h1 className="text-3xl py-1">
              {banner[currentBannerIndex].largeText1}
            </h1>
            <h1 className="text-3xl py-1">
              {banner[currentBannerIndex].largeText2}
            </h1>
            <p className="py-1">{banner[currentBannerIndex].desc}</p>
            <Button
              link={`/product/${banner[currentBannerIndex].slug.current}`}
              className="w-48 my-1 border-2 cursor-pointer text-bold lg:mx-0 mx-auto"
            >
              {banner[currentBannerIndex].buttonText}
            </Button>
          </div>
          <div className="">
            <div className="text-center mx-9">
              {banner[currentBannerIndex].image && (
                <img
                  src={urlFor(
                    banner[currentBannerIndex].image &&
                      banner[currentBannerIndex].image
                  ).url()}
                  className="max-w-[375px] max-h-[375px]"
                  alt="banner-image"
                />
              )}
              <h2 className="text-3xl ">
                {banner[currentBannerIndex].product}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span
          className={classNames(
            "rounded-full w-3 h-3 bg-gray-light bg-opacity-90",
            currentBannerIndex ? "bg-opacity-100" : ""
          )}
        ></span>
        <span
          className={classNames(
            "rounded-full w-3 h-3 bg-gray-light bg-opacity-90",
            currentBannerIndex ? "bg-opacity-100" : ""
          )}
        ></span>
        <span
          className={classNames(
            "rounded-full w-3 h-3 bg-gray-light bg-opacity-90",
            currentBannerIndex ? "bg-opacity-100" : ""
          )}
        ></span>
      </div>
    </div>
  );
}
export default Banner;
