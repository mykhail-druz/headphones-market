import React from "react";
import { client } from "~/lib/client";
import { Product } from "~/components/product/product";
import { HeroBanner } from "~/components/header/herobanner";
import { FooterBanner } from "~/components/footer/footerbanner";

const HomePage = ({ product, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    <div className="products-heading">
      <h2>Best sellings</h2>
      <p>Speakers of many variations</p>
    </div>
    <div className="products-container">
      {product?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>

    <FooterBanner />
  </div>
);

export default HomePage;

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
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
