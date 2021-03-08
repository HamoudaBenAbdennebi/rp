const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8000;

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/javascript"));
app.use(express.static(__dirname + "/public/style"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/about.html"));
});
app.get("/application", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/app.html"));
});
app.get("/social", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/social.html"));
});
app.get("/rules", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/rules.html"));
});



app.listen(PORT, () => {
  console.log(PORT);
});