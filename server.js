const fs = require("fs");
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3001;

// Gets HTML for index.html
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// Gets HTML for notes.html
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

// Gets notes from db.json
app.get("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/db/db.json"));
});

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);
