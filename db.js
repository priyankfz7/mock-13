const mongoose = require("mongoose");

let connection = mongoose.connect(
  "mongodb+srv://priyankfz7:priyankfz7@cluster0.e4rojrn.mongodb.net/gameusers?retryWrites=true&w=majority"
);

module.exports = { connection };
