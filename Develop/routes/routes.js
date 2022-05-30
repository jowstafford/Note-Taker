module.exports = (routes) => {
  routes.get("/notes", function (res) {
    res.sendFile(path.join("../public/notes.html"));
  });
  routes.get("*", function (res) {
    res.sendFile(path.join("../public/index.html"));
  });
};
