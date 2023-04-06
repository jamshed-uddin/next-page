import React from "react";
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import Book from "./Book";
import LoadingSpinner from "../LoadingSpinner";

const Books = () => {
  const navigate = useNavigation();
  console.log(navigate.state);

  if (navigate.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }

  const books = useLoaderData();
  const booksArr = books.books;

  return (
    <div className="my-container grid lg:grid-cols-4 gap-3">
      {booksArr.map((book) => (
        <Book key={book.isbn13} book={book}></Book>
      ))}
    </div>
  );
};

export default Books;
