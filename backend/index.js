const dotenv = require("dotenv");
const express = require("express");
const app = express();
dotenv.config();
const port = process.env.PORT;
app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/lol", (req, res) => {
  res.send("<h1>LOL DUDE</h1>");
});

app.listen(port, (req, res) => {
  console.log(`server running on port http://localhost:${port}`);
});
