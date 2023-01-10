import React from "react";
import { client } from "~/lib/client";
import HeroBanner from "~/components/Header/herobanner";
import Product from "~/components/Product/product";
import FooterBanner from "~/components/Footer/footerbanner";

const HomePage = ({ product, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    <div className="products-heading">
      <h2>Топ продажів</h2>
      <p>Навушники на будь-який смак</p>
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
