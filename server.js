//
// const fs = require("fs");
const express = require("express");
const noteData = require("./develop/db/db.json");

const app = express();
const PORT = process.env.port || 3001;

// Middleware for serving files from the public folder
app.use(express.static("public"));

// Sets up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Gets HTML for index.html
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

// Gets HTML for notes.html
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

// Wildcard route to index.html
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

// Gets notes from db.json
app.get("/api/notes", (req, res) => res.json(noteData));

app.get("/:id", (req, res) => {
  req.params.id;
  res.send(``);
});

app.post("/api/notes", (req, res) => {
  const newNote = req.body;
  writeToFile("db.json", newNote);

  res.json(`${req.method} received`);
});

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
