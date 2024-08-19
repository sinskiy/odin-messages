require("dotenv").config();
const path = require("node:path");

const express = require("express");
const indexRouter = require("./routes/indexRoutes");
const newRouter = require("./routes/newRoutes");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.use("/new", newRouter);
app.use("/", indexRouter);

app.listen(process.env.PORT, () =>
  console.log(`server is running at port ${process.env.PORT}`),
);
