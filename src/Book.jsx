import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { isbn13, image, title, subtitle, price } = book;

  return (
    <Link to={`../book/${isbn13}`}>
      <div className=" relative rounded transition duration-500  hover:-translate-y-1 cursor-pointer">
        <img className="object-cover mx-auto" src={image} alt="" />

        <div className="flex flex-col bg-black bg-opacity-80 text-white p-3 absolute inset-0 rounded transition duration-500 opacity-0 hover:opacity-100">
          <h1 className="text-lg font-bold mb-6">{title}</h1>
          <p>{subtitle}</p>
          <p className="mt-auto text-sm font-semibold">Price: {price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
