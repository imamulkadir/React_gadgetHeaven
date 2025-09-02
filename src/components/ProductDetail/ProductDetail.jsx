import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";

const ProductDetail = () => {
  const products = useLoaderData();
  const { product_id } = useParams();
  const product = products.find((product) => product.product_id === product_id);
  return (
    <div className="relative">
      <div className="bg-[#9538E2]">
        <div className="hero min-h-[70vh] lg:min-h-[50vh]">
          <div className="hero-content text-center">
            <div className="mt-6 max-w-md lg:max-w-5xl">
              <h1 className="-mt-30 text-4xl font-bold lg:-mt-50 lg:text-5xl">
                Product Details
              </h1>
              <p className="py-6">
                Explore the latest gadgets that will take your experience to the
                next level. <br />
                From smart devices to the coolest accessories, we have it all!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-50 left-1/2 z-10 hidden h-full -translate-x-1/2 transform overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 backdrop-blur-2xl lg:mx-auto lg:block lg:h-[550px] lg:w-full lg:max-w-5xl">
        <div className="flex flex-col items-start justify-center gap-4 rounded-lg p-4 lg:flex-row">
          {/* Product Image */}
          <div className="w-full rounded-2xl bg-gray-100 p-4">
            <img
              src={product.product_image}
              alt={product.product_title}
              className="z-20 h-20 w-20 rounded-lg object-cover p-2 md:h-auto md:w-full md:rounded-2xl"
            />
          </div>

          {/* Product Details */}
          <div className="flex w-full flex-col items-center justify-start gap-2 p-4 text-center text-black lg:items-start lg:text-left">
            <h2 className="text-2xl font-bold">{product.product_title}</h2>
            <p className="text-lg font-semibold">Price: ${product.price}</p>
            <p className="text-gray-700">
              {product.availability ? (
                <span className="rounded-2xl border-1 border-green-600 bg-[#d8f5ce] px-2 py-1 text-green-600">
                  Available
                </span>
              ) : (
                <span className="rounded-2xl border-1 border-red-600 bg-[#ffc7c7] px-2 py-1 text-red-600">
                  Out of Stock
                </span>
              )}
            </p>
            <p className="text-gray-400">{product.description}</p>
            <div className="text-gray-700">
              <span className="font-bold">Specification:</span>
              {Array.isArray(product.Specification) ? (
                <ol className="mt-2 list-inside list-decimal space-y-1">
                  {product.Specification.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ol>
              ) : (
                <p>{product.Specification}</p>
              )}
            </div>
            <h3 className="flex items-center gap-2">
              Rating{" "}
              <span className="text-yellow-400">
                <FaStar size={20} />
              </span>
            </h3>
            <h3 className="flex items-center justify-between gap-2">
              <span className="flex items-center gap-2 text-yellow-400">
                <FaStar size={20} />
                <FaStar size={20} />
                <FaStar size={20} />
                <FaStar size={20} />
                <FaRegStar size={20} />
              </span>{" "}
              <span className="rounded-xl bg-gray-200 px-3 py-1 text-gray-700">
                {product.rating}
              </span>
            </h3>
            <div className="my-2 flex items-center gap-2">
              <button
                type="button"
                class="btn cursor-pointer rounded-3xl border-none bg-[#9538E2] p-6 text-lg font-medium text-white"
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="aspect-square cursor-pointer items-center justify-center rounded-full border border-gray-400 bg-transparent p-3 text-black hover:border-[#9538E2] hover:text-[#9538E2]"
              >
                <FaRegHeart size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 lg:mt-100"></div>
    </div>
    // <div>
    //   <h2>{product.product_title}</h2>
    //   <p>{product.price}</p>
    //   <p>{product.description}</p>
    //   <p>{product.Specification}</p>
    //   <p>{product.availability}</p>
    // </div>
  );
};

export default ProductDetail;
