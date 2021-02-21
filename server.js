const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

var PORT = process.env.PORT || 3000;

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

//mongoose database connection
mongoose.connect(
  process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
