// Dependencies
const express = require("express");
const fitlogger = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const PORT = process.env.PORT || 3000;

//use morgan middleware
app.use(fitlogger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//check to see if the port is listening
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
