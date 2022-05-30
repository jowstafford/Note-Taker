const path = require("path");
const fs = require("fs");

module.exports = (routes) => {
  routes.get("/notes", function (res) {
    res.sendFile(path.join("../public/notes.html"));
  });
  routes.get("*", function (res) {
    res.sendFile(path.join("../public/index.html"));
  });

  fs.readFile("/db/db.json", (userData) => {
    const noteTaker = JSON.parse(userData);
    routes.get("/api/notes", function (res) {
      res.json(noteTaker);
    });
  });

  function Write() {
    fs.writeFile("/db/db.json", JSON.stringify(notes, "\t"), () => {
      return true;
    });
  }
  routes.post("/api/notes", function (req) {
    const Note = req.body;
    noteTaker.push(Note);
    Write();
  });
  routes.get("/api/notes/:id", function (req, res) {
    res.json(noteTaker[req.params.id]);
  });
};
