import React from "react";
import { client } from "~/lib/client";
import { Banner, Product } from "~/components";

const HomePage = ({ product, bannerData }) => {
  return (
    <div className="pt-14">
      <Banner banner={bannerData} />
      <div className="text-center text-primary px-4">
        <h2 className="text-4xl font-bold">Лiдери продажу</h2>
        <p className="text-md">Навушники на будь-який смак</p>
      </div>
      <div className="w-full flex flex-col mt-6">
        <div className="pb-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mx-auto space-y-8 sm:space-y-0 gap-8 px-8">
          {product.map((item) => (
            <Product key={item._id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

export const getServerSideProps = async () => {
  const query = `*[_type == "product"] | order(createdAt desc)`;
  const product = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      product,

      bannerData,
    },
  };
};
