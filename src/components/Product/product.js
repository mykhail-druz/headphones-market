import React from "react";
import Link from "next/link";
import { urlFor } from "~/lib/client";

const Product = ({
  product: {
    image, name, slug, price,
  },
}) => (
  <div className="max-w-[400px] max-h-[400px] hover:scale-105 duration-500 border border-primary p-3 rounded-xl">
    <Link href={`/product/${slug.current}`}>
      <div className="flex flex-col space-y-2">
        <div className="max-w-[400px] bg-white border rounded-xl">
          {image && (
            <img
              src={urlFor(image && image[0])}
              className="w-[300px] h-[300px] border p-6 object-scale-down "
              alt={name}
            />
          )}
        </div>
        <div className="flex flex-col">
          <p className="text-xl">{name}</p>
          <p className="font-extrabold text-lg">{price} ₴</p>
        </div>
      </div>
    </Link>
  </div>
);

export default Product;
