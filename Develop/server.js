const routes = require("./routes/routes");
const express = require("express");
const route = express();
const PORT = process.env.PORT||3001;

route.use(express.static("public"));
route.use(express.urlencoded({ extended: true }));
route.use(express.json());
route.use("/", routes);
route.listen(PORT, () => {
  console.dir(`Server now on port ${PORT}`);
});
