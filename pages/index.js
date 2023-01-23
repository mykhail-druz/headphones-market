import React from "react";
import { client } from "~/lib/client";
import { Banner, Product, Button } from "~/components";

const HomePage = ({ product, bannerData }) => {
  return (
    <div className="pt-14 flex flex-col">
      <Banner banner={bannerData} />
      <div className="text-center text-primary px-4 py-10">
        <h2 className="text-4xl font-bold">Лiдери продажу</h2>
        <p className="text-md">Навушники на будь-який смак</p>
      </div>
      <div className="w-full flex flex-col pb-[36px] space-y-9">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mx-auto space-y-8 sm:space-y-0 gap-8 px-8">
          {product.slice(0, 10).map((item) => (
            <Product key={item._id} product={item} />
          ))}
        </div>
        <div>
          <Button
            link={"/products/1"}
            outline
            className={"mx-auto w-2/4 md:w-1/4"}
          >
            До всіх продуктів
          </Button>
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
