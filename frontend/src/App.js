import { useContext, useEffect, useState } from "react";
import { BooksContext } from "./context/BooksContext";
import fetchData from "./helpers/fetchData";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import "./App.css";

function App() {
  const value = useContext(BooksContext);
  const [setBooks] = value.data;
  useEffect(() => {
    fetchData(setBooks);
  }, []);

  return (
    <>
      <Navbar />
      <Section />
    </>
  );
}

export default App;
