import { createContext, useState } from "react";
import axios from "axios";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const handelDelete = async (book) => {
    const id = book._id;
    const res = await axios.delete(`/api/mybooks/${id}`);
    const newBooksList = books.filter((book) => book._id !== id);
    setBooks(newBooksList);
  };
  return (
    <BooksContext.Provider value={{ data: [books, setBooks], handelDelete }}>
      {children}
    </BooksContext.Provider>
  );
};
