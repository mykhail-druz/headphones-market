import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

function Pagination({ totalItems, itemsPerPage, page }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const maxVisiblePages = 5;
  const firstVisiblePage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
  const lastVisiblePage = Math.min(
    totalPages,
    firstVisiblePage + maxVisiblePages - 1,
  );

  const pageLinks = [];
  for (let i = firstVisiblePage; i <= lastVisiblePage; i++) {
    if (i === firstVisiblePage && firstVisiblePage !== 1) {
      pageLinks.push();
    }
    if (i === lastVisiblePage && lastVisiblePage !== totalPages) {
      pageLinks.push();
    }
    pageLinks.push(
      <Link
        href={`/products/${i}`}
        key={i}
        className={classNames(
          "relative inline-flex items-center border px-4 py-2 text-sm font-medium focus:z-20",
          i === +page
            ? "z-10 bg-secondary border-secondary duration-500 text-white cursor-default hover:text-white"
            : "border-primary hover:bg-secondary hover:text-white hover:border-secondary cursor-cursor duration-500 bg-white text-primary",
        )}
      >
        {i}
      </Link>,
    );
  }

  return (
    <nav
      className="isolate inline-flex rounded-md justify-center py-1 space-x-1"
      aria-label="Pagination"
    >
      {+page >= 2 && (
        <Link
          href={`/products/${+page - 1}`}
          className={classNames(
            "relative inline-flex items-center border border-primary hover:bg-secondary hover:text-white hover:border-secondary bg-white p-2 text-sm font-medium text-primary duration-500 focus:z-20",
            +page === 1
              ? "cursor-default"
              : "cursor-pointer border-primary hover:border-secondary cursor-cursor duration-500 bg-white text-primary",
          )}
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </Link>
      )}

      {+page !== 1 && +page !== 2 && +page !== 3 && (
        <Link
          href={`/products/1`}
          key={1}
          className={classNames(
            "relative inline-flex items-center border px-4 py-2 text-sm font-medium focus:z-20",
            +page === 1
              ? "z-10 bg-red-500 border-red-500 duration-500 text-white cursor-default hover:text-white"
              : "border-primary hover:bg-secondary hover:text-white hover:border-secondary cursor-pointer duration-500 bg-white text-primary",
          )}
        >
          1
        </Link>
      )}
      {+page !== 1 && +page !== 2 && +page !== 3 && +page !== 4 && (
        <span className="relative inline-flex items-center border border-primary bg-white px-4 py-2 text-sm font-medium text-primary hover:bg-gray-50 focus:z-20">
          ...
        </span>
      )}
      {pageLinks}
      {+page !== totalPages
        && +page !== totalPages - 1
        && +page !== totalPages - 2
        && +page !== totalPages - 3 && (
          <span className="relative inline-flex items-center border border-primary bg-white px-4 py-2 text-sm font-medium text-primary hover:bg-gray-50 focus:z-20">
            ...
          </span>
      )}
      {+page !== totalPages
        && +page !== totalPages - 1
        && +page !== totalPages - 2 && (
          <Link
            href={`/products/${totalPages}`}
            key={totalPages}
            className={classNames(
              "relative inline-flex items-center border px-4 py-2 text-sm font-medium focus:z-20",
              +page === totalPages
                ? "z-10 bg-red-500 border-red-500 duration-500 text-white cursor-default hover:text-white"
                : "border-primary hover:bg-red-500 hover:text-white hover:border-red-500 cursor-pointer duration-500 bg-white text-primary",
            )}
          >
            {totalPages}
          </Link>
      )}
      {+page < totalPages && (
        <Link
          href={`/products/${+page + 1}`}
          className={classNames(
            "relative inline-flex items-center border border-primary hover:bg-secondary hover:text-white hover:border-secondary bg-white px-2 py-2 text-sm font-medium text-primary duration-500 focus:z-20",
            +page === totalPages ? "cursor-default" : "cursor-pointer",
          )}
        >
          <ChevronRightIcon className="w-5 h-5" />
        </Link>
      )}
    </nav>
  );
}
export default Pagination;
