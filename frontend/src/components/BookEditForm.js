import axios from "axios";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { BooksContext } from "../context/BooksContext";

function BookEditForm() {
  const { id } = useParams();
  const value = useContext(BooksContext);
  const [books] = value.data;
  const [book] = books.filter((book) => (book.id = id));

  const [title, setTitle] = useState("");
  const [auther, setAuther] = useState("");
  const [price, setPrice] = useState("");
  const handelUpdate = async () => {
    const updateBook = { ...book, title: title, auther: auther, price: +price };
    console.log(updateBook);
    const res = await axios.patch(`/api/mybooks/${id}`, {
      title: title,
      auther: auther,
      price: +price,
    });
    console.log("res", res);
  };
  return (
    <div>
      <div
        className="hero h-screen"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div className="form-control gap-2 items-center">
              <label className="input-group w-full">
                <span className="text-black">title</span>
                <input
                  type="text"
                  placeholder={book.title}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="input input-bordered text-black"
                />
              </label>
              <label className="input-group w-full">
                <span className="text-black">auther</span>
                <input
                  type="text"
                  placeholder={book.auther}
                  value={auther}
                  onChange={(e) => setAuther(e.target.value)}
                  className="input input-bordered  text-black "
                />
              </label>
              <label className="input-group w-full">
                <span className="text-black">Price</span>
                <input
                  type="text"
                  placeholder={`$${book.price}`}
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="input input-bordered  text-black"
                />
              </label>
              <button
                onClick={() => handelUpdate()}
                className="btn btn-primary w-full"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookEditForm;
