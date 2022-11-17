import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [title, setTitle] = useState("");
  const [auther, setAuther] = useState("");
  const [price, setPrice] = useState("");

  const handelForm = async () => {
    const book = { title: title, auther: auther, price: +price };
    const res = await axios.post("/api/mybooks/", book).catch((err) => {
      console.log(err);
    });
    setTitle("");
    setAuther("");
    setPrice("");
  };
  return (
    <div className="form-control gap-2 items-center">
      <label className="input-group w-full">
        <span className="text-black">title</span>
        <input
          type="text"
          placeholder="exemple"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input input-bordered text-black"
        />
      </label>
      <label className="input-group w-full">
        <span className="text-black">auther</span>
        <input
          type="text"
          placeholder="exemple"
          value={auther}
          onChange={(e) => setAuther(e.target.value)}
          className="input input-bordered  text-black "
        />
      </label>
      <label className="input-group w-full">
        <span className="text-black">Price</span>
        <input
          type="text"
          placeholder="10"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="input input-bordered  text-black"
        />
      </label>
      <button onClick={handelForm} className="btn btn-primary w-full">
        Submit
      </button>
    </div>
  );
};

export default Form;
