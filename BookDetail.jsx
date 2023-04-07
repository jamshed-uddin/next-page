import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const BookDetail = () => {
  const bookData = useLoaderData();
  const { image, title, desc, authors, publisher, year, rating, url, price } =
    bookData;

  const [fold, setFold] = useState(true);

  return (
    <>
      <div className="my-container">
        <div>
          <img className="mx-auto" src={image} alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-10">{title}</h1>

          <p className="font-semibold text-xl">Authors: {authors}</p>
          <p className="font-semibold">Publisher: {publisher}</p>
          <p className="font-semibold">Year: {year}</p>
          <p className="font-semibold">Ratings: {rating}</p>
          {fold ? (
            <p className="font-semibold mb-10">
              {desc.substring(0, 100)}...{" "}
              <span
                onClick={() => setFold(!fold)}
                className="text-blue-500 cursor-pointer py-3"
              >
                read more
              </span>
            </p>
          ) : (
            <p className="font-semibold mb-10">
              {desc}{" "}
              <span
                onClick={() => setFold(!fold)}
                className="text-blue-500 cursor-pointer py-3"
              >
                read less
              </span>
            </p>
          )}

          <div className="flex items-center ">
            <button className="bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold">
              Buy Now
            </button>
            <p className="font-semibold p-3">Price: {price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetail;
