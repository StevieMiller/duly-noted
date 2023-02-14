//
// const fs = require("fs");
const express = require("express");
const noteData = require("./db/db.json");
const path = require("path");

const app = express();
const PORT = process.env.port || 3001;

// Middleware for serving files from the public folder
app.use(express.static("public"));

// Sets up express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Gets HTML for index.html
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public/assets/index.html"))
);

// Gets HTML for notes.html
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/assets/notes.html"))
);

// Gets notes from db.json
app.get("/api/notes", (req, res) => res.json(noteData));

app.get("/:id", (req, res) => {
  req.params.id;
  res.send(``);
});

// Wildcard route to index.html
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

app.post("/api/notes", (req, res) => {
  const newNote = req.body;
  writeToFile("db.json", newNote);

  res.json(`${req.method} received`);
});

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
