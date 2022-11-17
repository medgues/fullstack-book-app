import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex">
      <div
        className="hero h-screen"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" block m-auto">
            <Link to={"add-newbook"}>
              <button className="btn btn-primary w-full my-2">
                Add new Book
              </button>
            </Link>
            <Link to={"listofbooks"}>
              <button className="btn btn-primary w-full my-2 ">
                List of books
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
