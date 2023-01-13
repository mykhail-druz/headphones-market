import { useRouter } from "next/router";
import { client } from "~/lib/client";
import { Pagination, Product } from "~/components";

export default function Items({ product, totalItems }) {
  const router = useRouter();
  const { page } = router.query;
  const itemsPerPage = 5;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const limitedItems = product.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    router.push({
      pathname: "/items",
      query: { page: newPage },
    });
  };

  return (
    <div>
      <div className="tw-pb-2 tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-5 tw-mx-auto tw-space-y-8 sm:tw-space-y-0 tw-gap-8">
        {limitedItems.map((item) => (
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
  );
}

export async function getServerSideProps(context) {
  const { page = 1 } = context.query;
  const itemsPerPage = 10;
  const skip = (page - 1) * itemsPerPage;

  const query = `*[_type == "product"] | order(createdAt desc)`;
  const product = await client
    .fetch(query)
    .then((res) => res.slice(skip, skip + itemsPerPage));
  const totalItems = await client.fetch(query).then((res) => res.length);
  return {
    props: {
      product,
      totalItems,
    },
  };
}
