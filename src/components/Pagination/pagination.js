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
    firstVisiblePage + maxVisiblePages - 1
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
          "tw-relative tw-inline-flex tw-items-center tw-border tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-focus:z-20",
          i === +page
            ? "tw-z-10 tw-bg-red-500 tw-border-red-500 tw-duration-500 tw-text-white tw-cursor-default hover:tw-text-white"
            : "tw-border-gray-300 hover:tw-bg-red-500 hover:tw-text-white hover:tw-border-red-500 tw-cursor-cursor tw-duration-500 tw-bg-white tw-text-gray-500"
        )}
      >
        {i}
      </Link>
    );
  }

  return (
    <nav
      className="tw-isolate tw-inline-flex tw-rounded-md tw-justify-center tw-py-1 tw-space-x-1"
      aria-label="Pagination"
    >
      {+page >= 2 && (
        <Link
          href={`/products/${+page - 1}`}
          className={classNames(
            "tw-relative tw-inline-flex tw-items-center tw-border tw-border-gray-300 tw-bg-white tw-px-2 tw-py-2 tw-text-sm tw-font-medium tw-text-gray-500 hover:tw-bg-gray-50 tw-focus:z-20",
            +page === 1
              ? "tw-cursor-default"
              : "tw-cursor-pointer tw-border-gray-300 hover:tw-text-red-500 hover:tw-bg-red-500 hover:tw-text-white hover:tw-border-red-500 tw-cursor-cursor tw-duration-500 tw-bg-white tw-text-gray-500"
          )}
        >
          <ChevronLeftIcon className="tw-w-5 tw-h-5" />
        </Link>
      )}

      {+page !== 1 && +page !== 2 && +page !== 3 && (
        <Link
          href={`/products/1`}
          key={1}
          className={classNames(
            "tw-relative tw-inline-flex tw-items-center tw-border tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-focus:z-20",
            +page === 1
              ? "tw-z-10 tw-bg-red-500 tw-border-red-500 tw-duration-500 tw-text-white tw-cursor-default hover:tw-text-white"
              : "tw-border-gray-300 hover:tw-bg-red-500 hover:tw-text-white hover:tw-border-red-500 tw-cursor-cursor tw-duration-500 tw-bg-white tw-text-gray-500"
          )}
        >
          1
        </Link>
      )}
      {+page !== 1 && +page !== 2 && +page !== 3 && +page !== 4 && (
        <span className="tw-relative tw-inline-flex tw-items-center tw-border tw-border-gray-300 tw-bg-white tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-text-gray-500 hover:tw-bg-gray-50 tw-focus:z-20">
          ...
        </span>
      )}
      {pageLinks}
      {+page !== totalPages &&
        +page !== totalPages - 1 &&
        +page !== totalPages - 2 &&
        +page !== totalPages - 3 && (
          <span className="tw-relative tw-inline-flex tw-items-center tw-border tw-border-gray-300 tw-bg-white tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-text-gray-500 hover:tw-bg-gray-50 tw-focus:z-20">
            ...
          </span>
        )}
      {+page !== totalPages &&
        +page !== totalPages - 1 &&
        +page !== totalPages - 2 && (
          <Link
            href={`/products/${totalPages}`}
            key={totalPages}
            className={classNames(
              "tw-relative tw-inline-flex tw-items-center tw-border tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-focus:z-20",
              +page === totalPages
                ? "tw-z-10 tw-bg-red-500 tw-border-red-500 tw-duration-500 tw-text-white tw-cursor-default hover:tw-text-white"
                : "tw-border-gray-300 hover:tw-bg-red-500 hover:tw-text-white hover:tw-border-red-500 tw-cursor-cursor tw-duration-500 tw-bg-white tw-text-gray-500"
            )}
          >
            {totalPages}
          </Link>
        )}
      {+page < totalPages && (
        <Link
          href={`/products/${+page + 1}`}
          className={classNames(
            "tw-relative tw-inline-flex tw-items-center tw-border tw-border-gray-300 tw-bg-white tw-px-2 tw-py-2 tw-text-sm tw-font-medium tw-text-gray-500 hover:tw-bg-gray-50 tw-focus:z-20",
            +page === totalPages ? "tw-cursor-default" : "tw-cursor-pointer"
          )}
        >
          <ChevronRightIcon className="tw-w-5 tw-h-5" />
        </Link>
      )}
    </nav>
  );
}
export default Pagination;
