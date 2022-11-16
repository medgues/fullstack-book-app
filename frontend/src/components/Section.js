import React, { useContext } from "react";
import { BooksContext } from "../context/BooksContext";
import Card from "./Card";
import Form from "./Form";

const Section = () => {
  const value = useContext(BooksContext);
  const [books] = value.data;
  // const handelDelete = async (book) => {
  //   const id = book._id;
  //   const res = await axios.delete(`/api/mybooks/${id}`);
  //   const newBooksList = books.filter((book) => book._id !== id);
  //   setBooks(newBooksList);
  // };
  return (
    <div>
      <div
        className="hero "
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <Form />
          </div>
        </div>
      </div>

      <div className="hero ">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="w-full flex flex-col items-center">
          {books.map((book) => (
            <Card key={book._id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
