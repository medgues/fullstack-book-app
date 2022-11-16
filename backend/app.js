const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const Router = require("./Routes/booksRouter");

const app = express();

app.use(express.json());

app.use("/api/mybooks", Router);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connected to MONGODB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log(`listening to port ${process.env.PORT}`);
});
