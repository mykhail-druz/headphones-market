import React, { useState, useEffect } from "react";

const banners = [
  {
    title: "Banner 1",
    image: "image1.jpg",
  },
  {
    title: "Banner 2",
    image: "image2.jpg",
  },
  {
    title: "Banner 3",
    image: "image3.jpg",
  },
];

function Banner() {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBannerIndex((currentIndex) => {
        return currentIndex === banners.length - 1 ? 0 : currentIndex + 1;
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="tw-h-[50vh] tw-w-full tw-border tw-mt-14">
      <h1>{banners[currentBannerIndex].title}</h1>
    </div>
  );
}

export default Banner;
