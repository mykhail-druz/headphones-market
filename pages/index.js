import React from "react";
import {client} from '../lib/client';
import { createClient } from "next-sanity";
import { Product, FooterBanner, HeaderBanner } from "../components";
import { async } from "rxjs";

const HomePage = ({ product, bannerData }) => {

  return (
    <div>
      <HeaderBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best sellings</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
        {product?.map((product) => {
          return <div key={product.id}>{product.name}</div>;
        })}
      </div>

      <FooterBanner />
    </div>
  );
}
>>>>>>> 768fbf35e6ca91334eb34d74836a0e4de3b301ab

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const product = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
      props: {
        product,bannerData
      }
  }
}

export default HomePage;
