const express = require("express");
const {
  getBooks,
  getBook,
  createBook,
  deleteBook,
  updateBook,
} = require("../Controllers/booksControllers");

const Router = express.Router();

Router.get("/", getBooks);

Router.get("/:id", getBook);

Router.post("/", createBook);

Router.delete("/:id", deleteBook);

Router.patch("/:id", updateBook);

module.exports = Router;
