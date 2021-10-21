const fs = require("fs");
const path = require("path");
const express = require("express");
const { __ } = require("ramda");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.render("index", { title: "Index" }));

app.listen("http://localhost:3000", (req, res) => {
  res.send("PS Project Running on port 3000!");
});
