import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "../context/BooksContext";

const Card = ({ book }) => {
  const { handelDelete } = useContext(BooksContext);

  return (
    <div className="card w-96 bg-neutral text-neutral-content my-5">
      <div className="card-body text-left">
        <h2>book titel : {book.title}</h2>
        <p>Auther : {book.auther} </p>
        <p>Price : $ {book.price} </p>
        <div className="card-actions justify-end">
          <Link to={`/edit/${book._id}`}>
            <button className="btn btn-ghost">Edit</button>
          </Link>
          <button
            onClick={() => handelDelete(book)}
            className="btn btn-primary"
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
