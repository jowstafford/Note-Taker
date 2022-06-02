const path = require("path");
const fs = require("fs");
const routes = require("express").Router;

module.exports = () => {
  routes.get("/notes", function (res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
  routes.get("*", function (res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
    console.log(res);
  });

  fs.readFile("./db/db.json", (userData) => {
    const noteTaker = JSON.parse(userData);
    routes.get("/api/notes", function (res) {
      res.json(noteTaker);
    });

    function Write(notes) {
      fs.writeFileSync("./db/db.json", JSON.stringify(notes, "\t"), () => {
        return true;
      });
    }
    routes.post("/api/notes", function (req, res) {
      req.body.id = noteTaker.length;
      const Note = req.body;
      noteTaker.push(Note);
      res.json(Note);
      return Write();
    });
    routes.get("/api/notes/:id", function (req, res) {
      res.json(noteTaker[req.params.id]);
    });
  });
};
