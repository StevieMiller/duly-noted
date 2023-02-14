// GET route for homepage
const { Router } = require("express");
const express = require("express");
const path = require("path");

router.get("/", (req, res) =>
  // add - can keep send file
);

// GET route for notes page
router.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

// get post - this is where we receive
// bonus: delete requests

module.exports = Router;
