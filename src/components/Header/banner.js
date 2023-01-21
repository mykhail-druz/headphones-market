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
    <div className="md:h-[50vh] w-full border bg-white ">
      <div className="flex justify-between flex-col-reverse md:flex-row">
        <div className="flex flex-col p-4 m-4 w-[325px] md:justify-start justify-center">
          <div className="">
          <h1 className="text-3xl py-1">
            {banner[currentBannerIndex].largeText1}
          </h1>
          <h1 className="text-3xl py-1">
            {banner[currentBannerIndex].largeText2}
          </h1>
          <p className="py-1">{banner[currentBannerIndex].desc}</p>
          <Button
            className="w-48 my-1 text-black bg-secondary hover:bg-black hover:text-white
          border-2 cursor-pointer text-bold">
            {banner[currentBannerIndex].buttonText}
          </Button>
          </div>
        </div>
        <div className="">
          <div className="text-center mx-9">
            {banner[currentBannerIndex].image && (
              <img
                src={urlFor(
                  banner[currentBannerIndex].image &&
                banner[currentBannerIndex].image).url()}
                className="w-[375px] h-[375px]"
                alt="banner-image"/>
            )}
            <h2 className="text-3xl ">{banner[currentBannerIndex].product}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
