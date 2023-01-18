import React from "react";
import { client } from "~/lib/client";
import { Banner, Product } from "~/components";

const HomePage = ({ product, bannerData }) => {
  return (
    <div className="tw-pt-14">
      <Banner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Лiдери продажу</h2>
        <p>Навушники на будь-який смак</p>
      </div>
      <div className="tw-w-full tw-flex tw-flex-col">
        <div className="tw-pb-2 tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-5 tw-mx-auto tw-space-y-8 sm:tw-space-y-0 tw-gap-8 tw-px-8">
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
