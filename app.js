//External Module
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

//Internal Module
const homeRouter = require("./routes/home");
const rootDir = require("./util/path");
const admin = require("./routes/admin");
//Main App Handling
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
//Give Premission To Use Public Folder
app.use(express.static(path.join(rootDir, "public")));

//Router
app.use(homeRouter);
app.use(admin.router);

app.listen(3000);
