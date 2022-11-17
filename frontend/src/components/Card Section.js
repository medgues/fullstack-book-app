import React, { useContext, useEffect } from "react";
import { BooksContext } from "../context/BooksContext";
import fetchData from "../helpers/fetchData";
import Card from "./Card";

function CardSection() {
  const value = useContext(BooksContext);
  const [books, setBooks] = value.data;
  useEffect(() => {
    fetchData(setBooks);
  }, []);
  // const handelDelete = async (book) => {
  //   const id = book._id;
  //   const res = await axios.delete(`/api/mybooks/${id}`);
  //   const newBooksList = books.filter((book) => book._id !== id);
  //   setBooks(newBooksList);
  // };

  return (
    <div className="hero ">
      <div className="hero-overlay h-screen bg-opacity-60"></div>
      <div className="w-full flex flex-col items-center">
        {books.map((book) => (
          <Card key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default CardSection;
