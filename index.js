const express = require("express");
const randomWords = require("random-words");
const { connection } = require("./db");
const cors = require("cors");
const { UserModel } = require("./userModel");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/randomword", (req, res) => {
  let word = randomWords(1);
  console.log(word);
  res.send(word);
});

app.post("/users", async (req, res) => {
  let user = new UserModel(req.body);
  try {
    await user.save();
  } catch (e) {
    res.send("something went wrong");
  }

  res.send("user has been added");
});

app.get("/users", async (req, res) => {
  try {
    let users = await UserModel.find();
    res.json({ users: users });
  } catch (e) {
    res.send("something went wrong");
  }
});

app.listen(8080, async () => {
  try {
    connection;
    console.log("connected to the db");
  } catch (e) {
    console.log(e);
  }

  console.log("server is running at http://localhost:8080");
});
