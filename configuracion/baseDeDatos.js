const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/my_first_db ")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error);
  });
