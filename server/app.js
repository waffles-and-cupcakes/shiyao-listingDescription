const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../db/index.js');
const Listing = require('../db/listingSchema.js');
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use('/rooms/:id', express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/rooms/details/:id', (req, res) => {
  var id = req.params.id;
  Listing.findOne({_id: id}).exec((err, listings) => {
    if (err) {
      res.send('You got an error when saving data');
    } else {
      res.send(listings);
    }
  });
});

module.exports = app;