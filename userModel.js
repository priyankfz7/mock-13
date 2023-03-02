const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  score: Number,
});

const UserModel = mongoose.model("gameuser", userSchema);
module.exports = { UserModel };
