import React from "react";
import { client } from "~/lib/client";
import { Banner, Product, Pagination } from "~/components";
import { useRouter } from "next/router";

const HomePage = ({ product, bannerData, totalItems }) => {
  const router = useRouter();
  const { page } = router.query;
  const itemsPerPage = 5;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const limitedItems = product.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    router.push({
      pathname: "/",
      query: { page: newPage },
    });
  };

  return (
    <div>
      <Banner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Лiдери продажу</h2>
        <p>Навушники на будь-який смак</p>
      </div>
      <div className="tw-w-full tw-flex tw-flex-col">
        <div className="tw-pb-2 tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-5 tw-mx-auto tw-space-y-8 sm:tw-space-y-0 tw-gap-8">
          {/* {limitedItems?.map((product, index) => {
            log(product[index]);
            return <Product key={product.name} product={product[index]} />;
          })} */}
          {/* Пока не трогай пока не проснусь и не пойму что тут происходит и как это работает и пока не проснусь  */}
          {product.map((item) => (
            <Product key={item._id} product={item} />
          ))}
        </div>
        <Pagination
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          currentPage={page}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default HomePage;

export const getServerSideProps = async (context) => {
  const { page = 1 } = context.query;
  const itemsPerPage = 10;
  const skip = (page - 1) * itemsPerPage;
  const query = `*[_type == "product"] | order(createdAt desc)`;
  const product = await client
    .fetch(query)
    .then((res) => res.slice(skip, skip + itemsPerPage));
  const totalItems = await client.fetch(query).then((res) => res.length);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      product,
      totalItems,
      bannerData,
    },
  };
};
