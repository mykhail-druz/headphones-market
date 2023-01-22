import React from "react";
import { useRouter } from "next/router";
import { client } from "~/lib/client";
import { Product, Pagination } from "~/components";

export default function Products({ products, page = 1, count }) {
  const router = useRouter();
  const handlePageChange = (newPage) => {
    router.push({
      pathname: "/",
      query: { page: newPage },
    });
  };

  return (
    <div className="mt-[40px] mb-4">
      <div className="w-full flex flex-col justify-center pt-8 space-y-4">
        <div className="text-primary text-center flex flex-col space-y-1">
          <h1 className="text-2xl font-bold">Весь Каталог Навушників</h1>
          <p className="text-xl">Баранки на любий смак</p>
        </div>
        <div className="grid grid-cols-1 min-h-[200px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mx-auto space-y-8 sm:space-y-0 gap-8 px-8">
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
  const page = params.page || 1;
  const limit = 10;
  const offset = (page - 1) * limit;
  const products = await client.fetch(
    `*[_type == "product"] | order(_createdAt desc) [${offset}...${
      offset + limit
    }]`,
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
