import Link from "next/link";
import React from "react";

export default function Product({ product }) {
  const discount =
    ((product.originalPrice - product.currentPrice) / product.originalPrice) *
    100;
  return (
    <div className="relative flex items-center flex-col justify-center border shadow rounded-sm">
      <small className="absolute left-2 top-2 font-semibold bg-yellow-100 py-1 px-2 rounded-md text-xs">
        {product.subCatName}
      </small>
      <Link href="#" className="flex items-center justify-center">
        <img src={product.image} alt="" className="w-full " />
      </Link>
      <div className="py-3 px-4">
        <small className="text-orange-600">Free delivery</small>
        <Link href="#" className="text-md text-xl line-clamp-2">
          {product.title}
        </Link>
        <p className="my-1 font-bold">UGX {product.currentPrice}</p>
        <div className="flex justify-between gap-4 items-center">
          <s className="text-sm">UGX {product.originalPrice}</s>
          <p className="bg-orange-100 rounded-md p-1 ">
            -{discount.toFixed(1)}%
          </p>
        </div>
        <button className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">
          Buy Now
        </button>
      </div>
    </div>
  );
}