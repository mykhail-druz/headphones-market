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
  /* eslint-disable*/
  return (
    <div className="flex flex-col">
      <div className="lg:h-[60vh] h-[75vh] md:h-[40vh] mx-auto w-[90%] border rounded-xl border-primary bg-primary mt-6 text-white">
        <div className="justify-between flex flex-col-reverse md:flex-row w-9/12 lg:w-6/12 mx-auto h-full items-center">
          <div className="flex flex-col p-4 m-4 max-w-[325px] md:justify-start justify-center text-center md:text-left md:space-y-2">
            <h1 className="text-2xl py-1 font-bold">
              {banner[currentBannerIndex].largeText1}
            </h1>
            <h1 className="text-2xl py-1 font-bold">
              {banner[currentBannerIndex].largeText2}
            </h1>
            <p className="py-1">{banner[currentBannerIndex].desc}</p>
            <Button
              link={`/product/${banner[currentBannerIndex].slug.current}`}
              className="w-48 my-1 border-2 cursor-pointer text-bold lg:mx-0 mx-auto md:m-0 mt-auto"
            >
              {banner[currentBannerIndex].buttonText}
            </Button>
          </div>

          <div className="text-center flex flex-col space-y-1">
            <div className="max-w-[275px] max-h-[275px]">
              {banner[currentBannerIndex].image && (
                <img
                  src={urlFor(
                    banner[currentBannerIndex].image &&
                      banner[currentBannerIndex].image
                  ).url()}
                  className="object-scale-down"
                  alt="banner-image"
                />
              )}
            </div>
            <h2 className="text-2xl ">{banner[currentBannerIndex].product}</h2>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
export default Banner;
