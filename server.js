// Dependencies
const express = require("express");
const fitlogger = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const PORT = process.env.PORT || 3000;

//check to see if the port is listening
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
