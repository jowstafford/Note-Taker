const fs = require("fs");

module.exports = (routes) => {
  routes.get("/notes", function (res) {
    res.sendFile(path.join("../public/notes.html"));
  });
  routes.get("*", function (res) {
    res.sendFile(path.join("../public/index.html"));
  });

  fs.readFile("db/db.json", (userData) => {
    const noteTaker = JSON.parse(userData);
    routes.get("/api/notes", function (res) {
      res.json(noteTaker);
    });
  });
};
