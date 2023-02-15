const express = require("express");
let noteData = require("./db/db.json");
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = process.env.port || 3001;

// Middleware for serving files from the public folder
app.use(express.static("public"));

// Sets up express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Gets notes from db.json
app.get("/api/notes", (req, res) => {
  return res.json(noteData);
});

// Gets HTML for index.html
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

// Gets HTML for notes.html
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

// Middleware to grab a note by its id
app.get("/api/notes/:id", (req, res) => {
  req.params.id;
  res.send(``);
});

// Posts note to db.json file
app.post("/api/notes", (req, res) => {
  const newNote = req.body;
  newNote.id = uuidv4();
  noteData.push(newNote);
  fs.writeFile("./db/db.json", JSON.stringify(noteData), (err) => {
    if (err) throw err;
    res.json(noteData);
  });
});

// Wildcard route to index.html
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
