//dependencies
const express = require("express");
const fitlogger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

//setup express
const app = express();

//mongoose database connection
mongoose.connect(
process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})

//call morgan
app.use(fitlogger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// routes
app.use(require("./routes/html_routes"));

//check to see if the port is listening
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
