//External Modulesّ
const express = require("express");
const path = require("path");

//Internal Module
const fs = require("fs");
const rootDir = require("../util/path");
let Contact = require("../Model/contact");

//Router
const router = express.Router();

//Save Phone Contact Details
router.post("/savecontact", (req, res, next) => {
  //Get Datas From UI Creat An Object Of Contact By Them
  var contactObj = new Contact(
    req.body.fullname,
    req.body.email,
    req.body.phonenumber
  );
  //Add Created Object To Contacts.Json {Check Whether Json File Has Been Existed Or Not}
  var contacstList;
  try {
    //If There Already Has Been a File
    contacstList = JSON.parse(
      fs.readFileSync(path.join(rootDir, "data", "contacts.json"))
    );
    contacstList.push(contactObj);
    fs.writeFileSync(
      path.join(rootDir, "data", "contacts.json"),
      JSON.stringify(contacstList)
    );
  } catch (error) {
    //If There hasn't Been Any File
    contacstList = [contactObj];
    fs.writeFileSync(
      path.join(rootDir, "data", "contacts.json"),
      JSON.stringify(contacstList)
    );
  }

  res.redirect("/");
});

//Get List Of All Contacts With Compelete Details
function getAllContacts() {
  var contactsList = fs.readFileSync(
    path.join(rootDir, "data", "contacts.json")
  );
  return JSON.parse(contactsList);
}

//Exports
module.exports = { router, getAllContacts };
