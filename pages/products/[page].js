import React from "react";
import { client } from "~/lib/client";
import { Product, Pagination } from "~/components";
import { useRouter } from "next/router";

export default function Products({ products, page = 1, count }) {
  const router = useRouter();
  const handlePageChange = (newPage) => {
    router.push({
      pathname: "/",
      query: { page: newPage },
    });
  };

  return (
    <div className="">
      <div className="tw-w-full tw-flex tw-flex-col tw-justify-center tw-pt-8">
        <div className="tw-pb-2 tw-grid tw-grid-cols-1 tw-min-h-[500px] sm:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-5 tw-mx-auto tw-space-y-8 sm:tw-space-y-0 tw-gap-8 tw-px-8">
          {products.map((item) => (
            <Product key={item._id} product={item} />
          ))}
        </div>
        <Pagination
          totalItems={count}
          itemsPerPage={10}
          page={page}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  let page = params.page || 1;
  const limit = 10;
  const offset = (page - 1) * limit;
  const products = await client.fetch(
    `*[_type == "product"] | order(_createdAt desc) [${offset}...${
      offset + limit
    }]`
  );
  const count = await client.fetch(`count(*[_type == "product"])`);
  return {
    props: { products, page, count },
  };
}

export async function getStaticPaths() {
  const count = await client.fetch(`count(*[_type == "product"])`);
  const paths = Array.from({ length: Math.ceil(count / 10) }, (_, i) => ({
    params: { page: (i + 2).toString() },
  }));
  return {
    paths: [{ params: { page: "1" } }, ...paths],
    fallback: false,
  };
}
