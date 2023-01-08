import React from "react";
import { createClient } from "next-sanity";
import { async } from "rxjs";
import Link from "next/link";
import { client } from "/src/lib/client";
import { Product, FooterBanner, HeaderBanner } from "/src/components";

const HomePage = ({ product, bannerData }) => (
  <div>
    <HeaderBanner heroBanner={bannerData.length && bannerData[0]} />
    <div className="products-heading">
      <h2>Best sellings</h2>
      <p>Speakers of many variations</p>
    </div>
    <div className="products-container">
      {product?.map((product) => (
        <section key={product.id}>
          <span>{product.name}</span>
          <br />
          <Link href={`/product/${product.slug.current}`}>
            <span>Buy Now</span>
          </Link>
        </section>
      ))}
    </div>

    <FooterBanner />
  </div>
);

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

export default HomePage;
