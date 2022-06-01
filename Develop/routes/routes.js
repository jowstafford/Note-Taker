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

  // function Write(notes) {
  //   // fs.writeFileSync("/db/db.json", JSON.stringify(notes, "\t"), () => {
      // fs.writeFileSync(path.join(__dirname, './db/db.json'), JSON.stringify(notes), null, 2);
  //     return true;
  //   ;
  // }
  routes.post("/api/notes", function (req, res) {
    const Note = req.body;
    noteTaker.push(Note);
    fs.writeFileSync(path.join(__dirname, './db/db.json'), JSON.stringify(noteTaker), null, 2);
    res.json(Note);
  });
  routes.get("/api/notes/:id", function (req, res) {
    res.json(noteTaker[req.params.id]);
  });
};
