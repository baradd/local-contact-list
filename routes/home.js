//External Module
const express = require('express');
const path = require('path');
const admin = require('../routes/admin');

//Internal Module
const rootDir = require('../util/path');
const fs = require('fs');

const router = express.Router();
//Send Main Page Template
router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'index.html'));
});
//Show Contacts List In contactslist URL
//Send Contact List Template
router.get('/contactslist', (req, res, next) => {
  res.render('contactsList.hbs', {
    titleText: 'Contacts List',
    contactsListStyle: true,
    contactsList: admin.getAllContacts(),
  });
});

//Export
module.exports = router;
