const { default: mongoose } = require("mongoose");
const booksModel = require("../models/booksModel");

const getBooks = async (req, res) => {
  const allBooks = await booksModel.find({});
  res.status(200).json({ allBooks });
};

const getBook = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ err: "book not found" });
  }

  const book = await booksModel.findById({ id });

  if (!book) {
    res.status(404).json({ err: "book not found" });
  }

  res.status(200).json({ book });
};

const createBook = async (req, res) => {
  const newBook = req.body;

  try {
    const book = await booksModel.create(newBook);
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ err: true, message: err.message });
  }
};

const deleteBook = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ err: "book not found" });
  }

  const book = await booksModel.findByIdAndDelete(id);

  if (!book) {
    res.status(404).json({ err: "book not found" });
  }

  res.status(200).json({ book });
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  const update = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ err: "book not found" });
  }

  const updatedBook = await booksModel.findByIdAndUpdate(id, { ...update });
  res.status(200).json(updatedBook);
};

module.exports = { getBooks, getBook, createBook, deleteBook, updateBook };
