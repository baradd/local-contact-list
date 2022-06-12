//External Module
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { engine } = require("express-handlebars");

//Internal Module
const homeRouter = require("./routes/home");
const rootDir = require("./util/path");
const admin = require("./routes/admin");

//Main App Handling
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

//Give Premission To Use Public Folder
app.use(express.static(path.join(rootDir, "public")));

//Template Engine *Express-Handlebars
app.engine(
  "hbs",
  engine({
    extname: "hbs",
    layoutsDir: "views/layouts",
    defaultLayout: "main",
  })
);
app.set("view engine", "hbs");
app.set("views", "views");

//Router
app.use(homeRouter);
app.use(admin.router);

app.listen(3000);
